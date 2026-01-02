import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from './profile.entity';
import { UserType } from 'types';
@Entity()
export class Group {
  @PrimaryGeneratedColumn()  //primary key
  id: number;
  @Column()
  name: string;  //name of the group
 
 @OneToMany((type:UserType) => User, (User:UserType) => User.id)
  members:User[]   //here we are declaring that this model called Group has relation with many users and these users are stored inside an array called members

}
