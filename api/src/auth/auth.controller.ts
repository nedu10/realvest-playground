import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegistrationDto } from './dto/auth-registration.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UsePipes(ValidationPipe)
  register(@Body() registrationDto: AuthRegistrationDto): Promise<object> {
    return this.authService.register(registrationDto);
  }

  @Post('login')
  @UsePipes(ValidationPipe)
  login(@Body() loginDto: AuthLoginDto): Promise<object> {
    return this.authService.login(loginDto);
  }
}
