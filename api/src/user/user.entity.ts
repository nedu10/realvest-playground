import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRole } from 'src/user-role/user-role.entity';
import { UserInvestment } from 'src/investment/user_investment.entity';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_role_id: number;

  @ManyToOne((type) => UserRole, (user_role) => user_role.users, {
    eager: false,
    cascade: false,
  })
  @JoinColumn({ referencedColumnName: 'id', name: 'user_role_id' })
  user_role: UserRole;

  @OneToMany(
    (type) => UserInvestment,
    (user_investment) => user_investment.user_id,
    {
      eager: false,
      nullable: true,
    },
  )
  user_investments: UserInvestment[];

  @OneToMany((type) => Transaction, (transaction) => transaction.user_id, {
    eager: false,
    nullable: true,
  })
  transactions: Transaction[];

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({ nullable: true })
  location: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updated_at: Date;

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return this.password === hash;
  }
}
