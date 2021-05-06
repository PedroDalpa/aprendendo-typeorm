import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MinLength(3, { message: 'Um nome precisa ter no minimo 3 caracteres' })
  @MaxLength(50, { message: 'Um nome precisa ter no máximo 50 caracteres' })
  name: string;

  @Column()
  @Min(3)
  @Max(20)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
