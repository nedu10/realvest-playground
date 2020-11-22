import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { IChangeInvestmentStatus } from './interfaces/change-status.interface';
import { InvestmentService } from './investment.service';

@Controller('investment')
export class InvestmentController {
  constructor(private investmentService: InvestmentService) {}

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  create_investment(
    @Body() createInvestmentDto: CreateInvestmentDto,
  ): Promise<object> {
    return this.investmentService.create_investment(createInvestmentDto);
  }
  @Put('/change-status/:investment_id')
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  change_investment_status(
    @Body() changeInvestmentStatus: IChangeInvestmentStatus,
    @Param('investment_id', ParseIntPipe) investment_id: number,
  ): Promise<object> {
    return this.investmentService.change_investment_status(
      changeInvestmentStatus,
      investment_id,
    );
  }
  @Get('/get-all')
  @UseGuards(AuthGuard())
  get_all_investment(): Promise<object> {
    return this.investmentService.get_all_investment();
  }
  @Get('/:investment_id')
  @UseGuards(AuthGuard())
  get_single_investment(
    @Param('investment_id', ParseIntPipe) investment_id: number,
  ): Promise<object> {
    return this.investmentService.get_single_investment(investment_id);
  }
}
