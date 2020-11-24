import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TransactionController } from './transaction.controller';
import { TransactionRepository } from './transaction.repository';
import { TransactionService } from './transaction.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([TransactionRepository])],
  controllers: [TransactionController],
  providers: [TransactionService, Logger],
})
export class TransactionModule {}
