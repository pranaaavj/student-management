import { Request, Response } from 'express';
import { StudentService } from '../services/student.service';
import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from '../models/request.model';

class StudentController {
  constructor(private studentService: StudentService) {}

  async create(req: Request, res: Response) {
    try {
      const request: CreateStudentRequest = req.body;
      const student = await this.studentService.createStudent(request);
      res.status(200).json(student);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Something unexpected occurred.' });
      }
    }
  }

  async get(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const student = await this.studentService.getStudent(id);
      res.status(200).json(student);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Something unexpected occurred.' });
      }
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const students = await this.studentService.getAllStudents();
      console.log(students);
      res.status(200).json(students);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Something unexpected occurred.' });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const request: UpdateStudentRequest = req.body;
      const updated = await this.studentService.updateStudent(id, request);
      res.status(200).json(updated);
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(404).json({ error: 'Something unexpected occurred.' });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deleted = await this.studentService.deleteStudent(id);
      res.status(200).json({ deleted });
    } catch (error) {
      if (error instanceof Error) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(404).json({ error: 'Something unexpected occurred.' });
      }
    }
  }
}

export { StudentController };
