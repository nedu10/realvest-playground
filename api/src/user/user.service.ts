import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { UserRole } from 'src/user-role/user-role.entity';
import { UserRoleRepository } from 'src/user-role/user-role.repository';
import { EditProfileDto } from './dto/edit-profile.dto';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: UserRepository,
    @InjectRepository(UserRole) private userRoleRepository: UserRoleRepository,
    private logger: Logger,
  ) {}

  async get_profile(user_id: number): Promise<object> {
    try {
      const user_data = await this.userRepository.findOne(user_id, {
        relations: ['user_role'],
      });

      if (!user_data) {
        return {
          status_code: 404,
          status: 'failed',
          message: 'User Not Found',
        };
      }

      return {
        status_code: 200,
        status: 'success',
        message: 'User Successfully Fetched',
        data: user_data,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Get Profile Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async get_all_users(): Promise<object> {
    try {
      const get_user_role = await this.userRoleRepository.findOne({
        role_label: 'USER',
      });
      const users_data = await this.userRepository.find({
        where: { user_role_id: get_user_role.id },
        relations: ['user_role'],
      });

      return {
        status_code: 200,
        status: 'success',
        message: 'Users Successfully Fetched',
        data: users_data,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Get Users Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async edit_profile(
    editProfileDto: EditProfileDto,
    user_id: number,
  ): Promise<object> {
    try {
      const { first_name, last_name, location } = editProfileDto;
      await this.userRepository.update(user_id, {
        first_name,
        last_name,
        location,
      });

      return {
        status_code: 200,
        status: 'success',
        message: 'User Updated Successfully',
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Update Profile Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
}
