import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [UserRoleModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
