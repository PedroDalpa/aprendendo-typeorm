import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Lesson from './Lesson';
import Student from './Student';

@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  duration: number;

  @OneToMany(() => Lesson, (classe) => Class)
  lessons: Lesson[];

  @ManyToMany((type) => Student)
  @JoinTable()
  students: Student[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
