import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/transaction/transaction.entity';
import { TransactionRepository } from 'src/transaction/transaction.repository';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { IChangeInvestmentStatus } from './interfaces/change-status.interface';
import { Investment } from './investment.entity';
import { InvestmentRepository } from './investment.repository';
import { UserInvestment } from './user_investment.entity';
import { UserInvestmentRepository } from './user_investment.repository';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment)
    private investmentRepository: InvestmentRepository,
    @InjectRepository(UserInvestment)
    private userInvestmentRepository: UserInvestmentRepository,
    @InjectRepository(Transaction)
    private investmentTransaction: TransactionRepository,
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

  async make_investment(
    user_id: number,
    investment_id: number,
  ): Promise<object> {
    try {
      const create_investment_id = await this.userInvestmentRepository.createInvestment(
        user_id,
        investment_id,
      );
      console.log(create_investment_id);
      await this.initialize_transaction(create_investment_id, user_id);
      return {
        status_code: 200,
        status: 'success',
        message: 'Successfully made investment',
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
  async my_investments(user_id: number): Promise<object> {
    try {
      const my_investments = await this.userInvestmentRepository.userInvestments(
        user_id,
      );
      return {
        status_code: 200,
        status: 'success',
        message: 'Successfully fetch user investments',
        data: my_investments,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('My Investments Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async my_single_investment(
    user_id: number,
    user_investment_id: number,
  ): Promise<object> {
    try {
      const single_investment = await this.userInvestmentRepository.userSingleInvestment(
        user_id,
        user_investment_id,
      );
      console.log(single_investment);
      return {
        status_code: 200,
        status: 'success',
        message: 'Successfully fetch user investment',
        data: single_investment,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Single Investment Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }

  async initialize_transaction(
    create_investment_id: number,
    user_id: number,
  ): Promise<void> {
    return await this.investmentTransaction.initialize_trnx(
      create_investment_id,
      user_id,
    );
  }
}
