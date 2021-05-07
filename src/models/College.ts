import { Entity, Column } from 'typeorm';
import Identifier from './Identifier';
import Institution from './Institution';

@Entity()
export default class College extends Institution {
  @Column((type) => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  year: number;
}
