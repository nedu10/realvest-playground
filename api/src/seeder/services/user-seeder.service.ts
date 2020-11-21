import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRegistrationDto } from 'src/auth/dto/auth-registration.dto';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/user-role/user-role.entity';

/**
 * Service dealing with user-role based operations.
 *
 * @class
 */
@Injectable()
export class UserSeederService {
  /**
   * Create an instance of class.
   *
   * @constructs
   *
   */

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(UserRole)
    private readonly userRoleRepository: Repository<UserRole>,
  ) {}

  user_data: object[] = [
    {
      first_name: 'Relvest',
      last_name: 'Admin',
      email: 'admin.realvest@gmail.com',
      password: 'realvestsecret',
    },
  ];

  /**
   * Seed all user role.
   *
   * @function
   */
  create(): Array<Promise<User>> {
    const cleardb = async () => {
      await this.userRepository.delete({});
    };
    cleardb();
    return this.user_data.map(async (each_user: AuthRegistrationDto) => {
      try {
        const dbUser = await this.userRepository.findOne({
          email: each_user.email,
        });

        // We check if a language already exists.
        // If it does don't create a new one.
        if (dbUser) {
          return Promise.resolve(null);
        }
        let new_user = new User();
        new_user.first_name = each_user.first_name;
        new_user.last_name = each_user.last_name;
        new_user.email = each_user.email;
        console.log('catch me');
        new_user.user_role = await this.get_user_role('ADMIN');
        new_user.salt = await bcrypt.genSalt();
        new_user.password = await this.hashPassword(
          each_user.password,
          new_user.salt,
        );
        return Promise.resolve(await new_user.save());
      } catch (error) {
        return Promise.reject(error);
      }
    });
  }

  async get_user_role(role_label: string): Promise<UserRole> {
    try {
      const single_user_role = await this.userRoleRepository.findOne({
        role_label,
      });
      return single_user_role;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(
        'Error in fetching user role for user seed',
      );
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
