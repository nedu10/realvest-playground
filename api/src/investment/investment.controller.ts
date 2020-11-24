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
import { GetUser } from 'src/auth/decorators/get-user.decorators';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
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

  @Get('/make-investment/:investment_id')
  @UseGuards(AuthGuard())
  make_investment(
    @Param('investment_id', ParseIntPipe) investment_id: number,
    @GetUser() user: JwtPayload,
  ): Promise<any> {
    return this.investmentService.make_investment(user.id, investment_id);
  }

  @Get('/user-investment')
  @UseGuards(AuthGuard())
  my_investments(@GetUser() user: JwtPayload): Promise<any> {
    return this.investmentService.my_investments(user.id);
  }
  @Get('/user-investment/:user_investment_id')
  @UseGuards(AuthGuard())
  my_single_investment(
    @Param('user_investment_id', ParseIntPipe) user_investment_id: number,
    @GetUser() user: JwtPayload,
  ): Promise<any> {
    return this.investmentService.my_single_investment(
      user.id,
      user_investment_id,
    );
  }

  @Get('/:investment_id')
  @UseGuards(AuthGuard())
  get_single_investment(
    @Param('investment_id', ParseIntPipe) investment_id: number,
  ): Promise<object> {
    return this.investmentService.get_single_investment(investment_id);
  }
}
