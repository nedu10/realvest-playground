import { User } from 'src/user/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { UserInvestment } from './user_investment.entity';

@Entity()
export class Investment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  duration_in_month: number;

  @Column()
  investment_price: number;

  @Column({ default: true })
  is_active: boolean;

  @OneToMany(
    (type) => UserInvestment,
    (user_investment) => user_investment.investment_id,
    {
      eager: false,
      cascade: false,
      nullable: true,
    },
  )
  investment_users: UserInvestment[];

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
