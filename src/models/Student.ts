import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import { MyDBCrypto } from '../helpers/DBCrypto';
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

  @Column({
    type: 'varchar',
    nullable: false,
    transformer: MyDBCrypto,
  })
  @MinLength(3, { message: 'Um   precisa ter no minimo 3 caracteres' })
  @MaxLength(50, { message: 'Um nome  ter no máximo 50 caracteres' })
  name: string;

  @Column()
  @Min(3)
  @Max(20)
  key: number;

  @Column({ transformer: MyDBCrypto })
  @IsEmail()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
