import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthModule } from 'src/auth/auth.module';
import { UserRoleRepository } from 'src/user-role/user-role.repository';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([UserRepository, UserRoleRepository]),
  ],
  providers: [UserService, Logger],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
