import { validate } from 'class-validator';
import { Router } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

const studentRouter = Router();

studentRouter.post('/', async (request, response) => {
  try {
    const repo = getRepository(Student);
    const { name, key, email } = request.body;

    const student = repo.create({
      email,
      name,
      key,
    });
    const errors = await validate(student);

    if (errors.length !== 0) {
      return response.status(400).json(errors);
    }

    await repo.save(student);
    return response.status(201).json(student);
  } catch (err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
});

studentRouter.get('/', async (request, response) => {
  response.json(await getRepository(Student).find());
});

export { studentRouter };
