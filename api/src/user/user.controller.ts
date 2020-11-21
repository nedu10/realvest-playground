import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorators';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  @UseGuards(AuthGuard())
  get_all_users(): Promise<object> {
    return this.userService.get_all_users();
  }
  @Get('/profile')
  @UseGuards(AuthGuard())
  get_profile(@GetUser() user_info: JwtPayload): Promise<object> {
    return this.userService.get_profile(user_info.id);
  }
  @Get('/:user_id')
  @UseGuards(AuthGuard())
  get_user(@Param('user_id', ParseIntPipe) user_id: number): Promise<object> {
    return this.userService.get_profile(user_id);
  }
}
