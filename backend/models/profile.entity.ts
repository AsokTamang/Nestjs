import { Entity, Column, PrimaryGeneratedColumn,ManyToMany } from 'typeorm';
import { Group } from './groups.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()  //primary key
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({unique:true})
  email: string;

  @Column()
  password: string;
  
 
  @ManyToMany(() => Group, (Group) => Group.members)
  groups: Group[]; //
}
