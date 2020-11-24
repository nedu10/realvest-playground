import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TransactionModule } from 'src/transaction/transaction.module';
import { TransactionRepository } from 'src/transaction/transaction.repository';
import { InvestmentController } from './investment.controller';
import { InvestmentRepository } from './investment.repository';
import { InvestmentService } from './investment.service';
import { UserInvestmentRepository } from './user_investment.repository';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([
      InvestmentRepository,
      UserInvestmentRepository,
      TransactionRepository,
    ]),
  ],
  controllers: [InvestmentController],
  providers: [InvestmentService, Logger],
})
export class InvestmentModule {}
