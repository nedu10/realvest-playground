import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { IChangeInvestmentStatus } from './interfaces/change-status.interface';
import { Investment } from './investment.entity';
import { InvestmentRepository } from './investment.repository';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment)
    private investmentRepository: InvestmentRepository,
    private logger: Logger,
  ) {}

  async create_investment(
    createInvestmentDto: CreateInvestmentDto,
  ): Promise<object> {
    try {
      await this.investmentRepository.createNew(createInvestmentDto);
      return {
        status_code: 200,
        status: 'success',
        message: 'Investment Successfully Created',
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Create Investment Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async change_investment_status(
    changeInvestmentStatus: IChangeInvestmentStatus,
    investment_id: number,
  ): Promise<object> {
    try {
      // await this.investmentRepository.edit_investment(editInvestmentDto);
      await this.investmentRepository.update(
        investment_id,
        changeInvestmentStatus,
      );
      return {
        status_code: 200,
        status: 'success',
        message: 'Investment Status Successfully Updated',
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Create Investment Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async get_all_investment(): Promise<object> {
    try {
      const all_investment = await this.investmentRepository.find();
      return {
        status_code: 201,
        status: 'success',
        message: 'All Investment Successfully Fetched',
        data: all_investment,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Create Investment Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async get_single_investment(investment_id: number): Promise<object> {
    try {
      const single_investment = await this.investmentRepository.findOne(
        investment_id,
      );
      return {
        status_code: 200,
        status: 'success',
        message: 'Single Investment Successfully Fetched',
        data: single_investment,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Create Investment Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
}
