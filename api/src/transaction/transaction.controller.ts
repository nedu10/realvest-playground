import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/decorators/get-user.decorators';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interface';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get('/')
  @UseGuards(AuthGuard())
  get_all_transactions(): Promise<object> {
    return this.transactionService.get_all_transactions();
  }
  @Get('/my-transactions')
  @UseGuards(AuthGuard())
  get_my_transactions(@GetUser() user: JwtPayload): Promise<object> {
    return this.transactionService.get_my_transactions(user.id);
  }
  @Get('/:transaction_id')
  @UseGuards(AuthGuard())
  single_transaction(
    @GetUser() user: JwtPayload,
    @Param('transaction_id', ParseIntPipe) transaction_id: number,
  ): Promise<object> {
    return this.transactionService.single_transaction(user.id, transaction_id);
  }
}
