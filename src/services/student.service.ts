import { Student, IStudentDocument } from '../models/student.model';
import IRepository from '../repository/repository.interface';
import {
  CreateStudentRequest,
  UpdateStudentRequest,
} from '../models/request.model';
import { StudentResponse } from '../models/response.model';

class StudentService {
  constructor(private repository: IRepository<IStudentDocument>) {}

  async createStudent(req: CreateStudentRequest): Promise<StudentResponse> {
    const studentEntity = new Student(req.name, req.grade);
    const student = await this.repository.create({
      name: studentEntity.getName(),
      grade: studentEntity.getGrade(),
    });

    return this.mapToResponse(student);
  }

  async getStudent(id: string): Promise<StudentResponse> {
    const student = await this.repository.findOne(id);
    return this.mapToResponse(student);
  }

  async getAllStudents(): Promise<StudentResponse[]> {
    const students = await this.repository.findAll();
    return students.map((student) => this.mapToResponse(student));
  }

  async deleteStudent(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }

  async updateStudent(
    id: string,
    request: UpdateStudentRequest
  ): Promise<StudentResponse> {
    const updated = await this.repository.update(id, request);
    return this.mapToResponse(updated);
  }

  private mapToResponse(student: IStudentDocument): StudentResponse {
    return {
      id: student._id.toString(),
      name: student.name,
      grade: student.grade,
      details: student.getDetails(),
    };
  }
}

export { StudentService };
