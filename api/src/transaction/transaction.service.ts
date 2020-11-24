import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionRepository: TransactionRepository,
    private logger: Logger,
  ) {}

  async get_all_transactions(): Promise<object> {
    try {
      const all_transaction = await this.transactionRepository.find({
        relations: ['user', 'user_investment'],
      });
      return {
        status_code: 200,
        status: 'success',
        message: 'All Transaction Successfully Fetched',
        data: all_transaction,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('All Transaction Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async get_my_transactions(user_id: number): Promise<object> {
    try {
      const my_transactions = await this.transactionRepository.find({
        where: { user_id },
        relations: ['user', 'user_investment'],
      });
      return {
        status_code: 200,
        status: 'success',
        message: 'My Transactions Successfully Fetched',
        data: my_transactions,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('My Transactions Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
  async single_transaction(
    user_id: number,
    tansaction_id: number,
  ): Promise<object> {
    try {
      const single_transaction = await this.transactionRepository.findOne(
        tansaction_id,
        {
          relations: ['user', 'user_investment'],
        },
      );
      return {
        status_code: 200,
        status: 'success',
        message: 'Single Transaction Successfully Fetched',
        data: single_transaction,
      };
    } catch (error) {
      console.log(error);

      this.logger.error('Single Transaction Service Failed ' + error);
      return {
        status_code: error.code || 500,
        status: 'error',
        message: error.message || 'System Error',
        error: error.stack || error,
      };
    }
  }
}
