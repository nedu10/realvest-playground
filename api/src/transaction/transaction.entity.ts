import { UserInvestment } from 'src/investment/user_investment.entity';
import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transaction_reference: string;

  @Column({ default: 'PENDING' })
  transaction_status: string;

  @Column()
  user_investment_id: number;

  @ManyToOne(
    (type) => UserInvestment,
    (user_investment) => user_investment.transactions,
    {
      eager: false,
      cascade: false,
    },
  )
  @JoinColumn({ referencedColumnName: 'id', name: 'user_investment_id' })
  user_investment: UserInvestment;

  @Column()
  user_id: number;

  @ManyToOne((type) => User, (user) => user.transactions, {
    eager: false,
    cascade: false,
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'user_id' })
  user: User;

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
