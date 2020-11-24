import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorators';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { EditProfileDto } from './dto/edit-profile.dto';
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
  @Put('/edit-profile')
  @UseGuards(AuthGuard())
  edit_profile(
    @Body() editProfileDto: EditProfileDto,
    @GetUser() user_info: JwtPayload,
  ): Promise<object> {
    return this.userService.edit_profile(editProfileDto, user_info.id);
  }
}
