import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { UserRoleModule } from './user-role/user-role.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { InvestmentModule } from './investment/investment.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [UserRoleModule, TypeOrmModule.forRoot(typeormConfig), UserModule, AuthModule, InvestmentModule, TransactionModule],
})
export class AppModule {}
