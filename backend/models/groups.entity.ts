import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from 'typeorm';
import { User } from './profile.entity';
import { Expense } from './expense.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn() //primary key
  id: number;
  @Column()
  name: string; //name of the group

  @ManyToMany(() => User, (User) => User.groups)
  @JoinTable()
  //members is the group member
  members: User[]; //here we are declaring that this model called Group has relation with many users and these users are stored inside an array called members
  
  @OneToMany(() => Expense, (Expense) => Expense.expenseGroup)   
  groupExpense: Expense[]; //here we are declaring that this one model called expense has relation with many expense models
  
}
