import { AuthRegistrationDto } from 'src/auth/dto/auth-registration.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createNew(registrationDto: AuthRegistrationDto): Promise<void> {
    const {
      first_name,
      last_name,
      email,
      location,
      password,
      user_role_id,
    } = registrationDto;
    const new_user = new User();
    new_user.first_name = first_name;
    new_user.last_name = last_name;
    new_user.email = email;
    new_user.location = location;
    new_user.user_role_id = user_role_id;
    new_user.salt = await bcrypt.genSalt();
    new_user.password = await this.hashPassword(password, new_user.salt);
    await new_user.save();
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
