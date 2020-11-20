import { Module } from '@nestjs/common';
import { UserRoleModule } from './user-role/user-role.module';

@Module({
  imports: [UserRoleModule],
})
export class AppModule {}
