import { Entity, Column, PrimaryGeneratedColumn,ManyToOne,JoinColumn } from 'typeorm';
import { Expense } from './expense.entity';
import { User } from './profile.entity';

@Entity()
export class ExpenseSplit {
  @PrimaryGeneratedColumn()  //primary key
  id: number;
  
  @Column('decimal',{precision:10,scale:2})   //here precision means the amount can range upto 10 and the decimal upto .__ 
  amount: number;   //here this description column stores the detail about this expense
  

  //as many expensesplit can be related with one split
  @ManyToOne(() => Expense, (Expense) => Expense.SplittedData,{onDelete:'CASCADE'})  //HERE if the parent expense is deleted then the child expenses which are splitted data of this parent group will be automatically deleted
   @JoinColumn()  //here as multiple expenses can be related with one group, we are creating a foreign key in this table
   expense: Expense; // as many expenses be stored in a single group table
  
   @ManyToOne(()=>User)  //here this splitted amount relates to the user
   user:User     //which means the money owed by the user
}
