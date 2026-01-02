import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';
import { Group } from './groups.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()  //primary key
  id: number;

  @Column()
  description: string;   //here this description column stores the detail about this expense
  
  @ManyToOne(() => Group, (Group) => Group.groupExpense,{onDelete:'CASCADE'})  //HERE if the group is deleted then the child expenses of this parent group will be automatically deleted
  expenseGroup: Group; // as many expenses be stored in a single group table
}
