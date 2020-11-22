import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { InvestmentController } from './investment.controller';
import { InvestmentRepository } from './investment.repository';
import { InvestmentService } from './investment.service';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([InvestmentRepository])],
  controllers: [InvestmentController],
  providers: [InvestmentService, Logger],
})
export class InvestmentModule {}
