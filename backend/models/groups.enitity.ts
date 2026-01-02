import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { User } from './profile.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn() //primary key
  id: number;
  @Column()
  name: string; //name of the group

  @ManyToMany(() => User, (User) => User.groups)
  @JoinTable()
  members: User[]; //here we are declaring that this model called Group has relation with many users and these users are stored inside an array called members
}
