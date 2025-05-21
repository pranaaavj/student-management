import { Router } from 'express';
import { StudentRepository } from '../repository/student.repository';
import { StudentService } from '../services/student.service';
import { StudentController } from '../controllers/student.controller';

const router = Router();

const repository = new StudentRepository();
const service = new StudentService(repository);
const controller = new StudentController(service);

router.post('/', (req, res) => controller.create(req, res));
router.get('/:id', (req, res) => controller.get(req, res));
router.get('/', (req, res) => controller.getAll(req, res));
router.put('/:id', (req, res) => controller.update(req, res));
router.delete('/:id', (req, res) => controller.delete(req, res));

export { router as StudentRouter };
