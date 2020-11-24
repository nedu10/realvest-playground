import { type } from 'os';
import { Transaction } from 'src/transaction/transaction.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Investment } from './investment.entity';

@Entity()
export class UserInvestment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @ManyToOne((type) => User, (user) => user.user_investments, {
    eager: false,
    cascade: false,
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  user: User;

  @Column()
  investment_id: number;

  @ManyToOne(
    (type) => Investment,
    (investment) => investment.investment_users,
    {
      eager: false,
      cascade: false,
    },
  )
  @JoinColumn({ referencedColumnName: 'id', name: 'investment_id' })
  investment: Investment;

  @OneToMany(
    (type) => Transaction,
    (transaction) => transaction.user_investment,
    {
      eager: false,
      nullable: true,
    },
  )
  transactions: Transaction[];

  @Column({ default: true })
  is_active: boolean;

  @Column({ default: false })
  is_completed: boolean;

  @Column({ default: false })
  has_paid_current_month: boolean;

  @Column({ default: 0 })
  no_of_month_paid: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  start_date: Date;

  @Column({ type: 'timestamp', nullable: true })
  last_payment_date: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;
}
