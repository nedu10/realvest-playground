import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from './transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  async initialize_trnx(
    create_investment_id: number,
    user_id: number,
  ): Promise<void> {
    const new_trnx = new Transaction();
    new_trnx.transaction_reference = 'TWREYE2357TEI9';
    new_trnx.transaction_status = 'SUCCESSFUL';
    new_trnx.user_id = user_id;
    new_trnx.user_investment_id = create_investment_id;
    await new_trnx.save();
  }
}
