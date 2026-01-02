import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn, OneToMany } from 'typeorm';
import { Group } from './groups.entity';
import { ExpenseSplit } from './expensesplit.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()  //primary key
  id: number;

  @Column()
  description: string;   //here this description column stores the detail about this expense
  
  @Column('decimal',{precision:10,scale:2})   //here precision means the amount can range upto 10 and the decimal upto .__ 
  amount: number;   //here this description column stores the detail about this expense
  
  @ManyToOne(() => Group, (Group) => Group.groupExpense,{onDelete:'CASCADE'})  //HERE if the group is deleted then the child expenses of this parent group will be automatically deleted
   @JoinColumn()  //here as multiple expenses can be related with one group, we are creating a foreign key in this table
  expenseGroup: Group; // as many expenses be stored in a single group table

  @OneToMany(()=>ExpenseSplit,(ExpenseSplit)=>ExpenseSplit.expense)
  SplittedData:ExpenseSplit[]   //HERE this expense is divided into multiple expensesplit data as model
}
