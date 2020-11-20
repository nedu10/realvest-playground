import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  role_label: string;

  @Column({ default: false })
  is_deleted: boolean;

  // @OneToMany((type) =>)
}
