import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/user-role/user-role.entity';
import { Repository } from 'typeorm';

/**
 * Service dealing with user-role based operations.
 *
 * @class
 */
@Injectable()
export class UserRoleSeederService {
  /**
   * Create an instance of class.
   *
   * @constructs
   *
   * @param {Repository<UserRole>} userRoleRepository
   */
  user_role_date: object[] = [{ role_label: 'ADMIN' }, { role_label: 'USER' }];
  constructor(
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}
  /**
   * Seed all user role.
   *
   * @function
   */
  create(): Array<Promise<UserRole>> {
    const cleardb = async () => {
      await this.userRoleRepository.delete({});
    };
    cleardb();
    return this.user_role_date.map(
      async (each_role: { role_label: string }) => {
        try {
          const dbUserRole = await this.userRoleRepository.findOne({
            role_label: each_role.role_label,
          });

          // We check if a language already exists.
          // If it does don't create a new one.
          if (dbUserRole) {
            return Promise.resolve(null);
          }
          let new_user_role = new UserRole();
          new_user_role.role_label = each_role.role_label;
          return Promise.resolve(await new_user_role.save());
        } catch (error) {
          return Promise.reject(error);
        }
      },
    );
  }
}
