import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateInvestmentDto {
  @IsString()
  name: string;

  description?: string;

  @IsNumber()
  duration_in_month: number;

  @IsNumber()
  investment_price: number;

  is_active?: boolean;
}
