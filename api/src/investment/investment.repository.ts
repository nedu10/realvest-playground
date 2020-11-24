import { EntityRepository, Repository } from 'typeorm';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { Investment } from './investment.entity';

@EntityRepository(Investment)
export class InvestmentRepository extends Repository<Investment> {
  async createNew(createInvestmentDto: CreateInvestmentDto): Promise<void> {
    const {
      name,
      description,
      duration_in_month,
      investment_price,
      is_active,
    } = createInvestmentDto;
    const new_investment = new Investment();
    new_investment.name = name;
    new_investment.description = description;
    new_investment.duration_in_month = duration_in_month;
    new_investment.investment_price = investment_price;
    new_investment.is_active = is_active;
    await new_investment.save();
  }
}
