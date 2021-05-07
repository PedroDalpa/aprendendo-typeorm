import { Entity, Column } from 'typeorm';
import Identifier from './Identifier';
import Institution from './Institution';

@Entity()
export default class University extends Institution {
  @Column((type) => Identifier)
  identification: Identifier;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
