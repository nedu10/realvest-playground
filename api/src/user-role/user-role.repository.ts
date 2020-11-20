import { EntityRepository, Repository } from 'typeorm';
import { UserRole } from './user-role.entity';

@EntityRepository(UserRole)
export class UserRoleRepository extends Repository<UserRole> {
  async createData(data): Promise<any> {
    const { role_label } = data;
    let new_user_role = new UserRole();
    new_user_role.role_label = role_label;
    return await new_user_role.save();
  }
}
