import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserRepository } from 'src/user/user.repository';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegistrationDto } from './dto/auth-registration.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private readonly logger: Logger,
    private jwtService: JwtService,
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
  async login(loginDto: AuthLoginDto): Promise<object> {
    try {
      const user = await this.userRepository.validateUserPassword(loginDto);

      if (!(user && user.email)) {
        return {
          status_code: 400,
          status: 'failed',
          message: 'Auth Failed',
          error: new UnauthorizedException('Invalid Credentials'),
        };
      }

      //   console.log('user >> ', user);

      const payload: JwtPayload = {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        location: user.location,
        user_role_id: user.user_role_id,
        user_role_label: user.user_role.role_label,
        user_role_is_deleted: user.user_role.is_deleted,
      };

      const access_token = await this.jwtService.sign(payload);

      return {
        status_code: 200,
        status: 'success',
        message: 'User Successfully Login',
        token: access_token,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Login Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
}
