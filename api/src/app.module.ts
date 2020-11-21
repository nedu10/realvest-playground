import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { UserRoleModule } from './user-role/user-role.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserRoleModule, TypeOrmModule.forRoot(typeormConfig), UserModule, AuthModule],
})
export class AppModule {}
