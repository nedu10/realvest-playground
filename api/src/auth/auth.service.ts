import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { AuthRegistrationDto } from './dto/auth-registration.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private readonly logger: Logger,
  ) {}

  async register(registrationDto: AuthRegistrationDto): Promise<object> {
    try {
      await this.userRepository.createNew(registrationDto);
      return {
        status_code: 201,
        status: 'success',
        message: 'User Successfully Registered',
      };
    } catch (error) {
      this.logger.error('Registration Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
}
