import { EntityRepository, Repository } from 'typeorm';
import { UserInvestment } from './user_investment.entity';

@EntityRepository(UserInvestment)
export class UserInvestmentRepository extends Repository<UserInvestment> {
  async createInvestment(
    user_id: number,
    investment_id: number,
  ): Promise<number> {
    const new_user_investment = new UserInvestment();
    new_user_investment.user_id = user_id;
    new_user_investment.investment_id = investment_id;

    const save_data = await new_user_investment.save();
    console.log('save_data >> ', save_data.id);
    return save_data.id;
  }
  async userInvestments(user_id: number): Promise<object> {
    return await this.find({
      where: { user_id },
      relations: ['user', 'investment', 'transactions'],
    });
  }
  async userSingleInvestment(
    user_id: number,
    user_investment_id,
  ): Promise<object> {
    console.log(user_id, user_investment_id);

    return await this.findOne(
      { id: user_investment_id, user_id },
      { relations: ['user', 'investment', 'transactions'] },
    );
  }
}
