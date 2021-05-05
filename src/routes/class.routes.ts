import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import { Class } from '../models/Class';
import { ClassRepository } from '../repositories/ClassRepository';

const classRouter = Router();

classRouter.post('/', async (request, response) => {
  try {
    const repository = getRepository(Class);

    const newClass = await repository.save(request.body);

    return response.status(201).json(newClass);
  } catch (error) {
    console.error(error.message);

    return response.sendStatus(500);
  }
});

classRouter.get('/', async (request, response) => {
  return response.json(await getRepository(Class).find());
});

classRouter.get('/:name', async (request, response) => {
  const { name } = request.params;

  const classFilter = await getCustomRepository(ClassRepository).findByName(
    name
  );

  return response.json(classFilter);
});

export { classRouter };
