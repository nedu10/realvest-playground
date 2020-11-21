import { AuthRegistrationDto } from 'src/auth/dto/auth-registration.dto';
import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
import { AuthLoginDto } from 'src/auth/dto/auth-login.dto';

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

  async validateUserPassword(loginDto: AuthLoginDto): Promise<any> {
    const { email, password } = loginDto;
    const get_user = await this.findOne(
      { email },
      { relations: ['user_role'] },
    );
    if (get_user && (await get_user.validatePassword(password))) {
      return get_user;
    } else {
      return null;
    }
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return await bcrypt.hash(password, salt);
  }
}
