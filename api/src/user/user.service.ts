import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: UserRepository,
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
      const users_data = await this.userRepository.find({
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
}
