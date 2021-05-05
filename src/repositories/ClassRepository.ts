import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Class } from '../models/Class';

@EntityRepository(Class)
class ClassRepository extends Repository<Class> {
  public async findByName(name: string): Promise<Class[]> {
    const classFilter = await this.find({
      where: { name },
    });

    return classFilter;
  }
}

export { ClassRepository };
