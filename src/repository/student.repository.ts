import { IStudent, StudentModel } from '../models/student.model';
import IRepository from './repository.interface';

class StudentRepository implements IRepository<IStudent> {
  constructor() {}

  async create(item: IStudent): Promise<IStudent> {
    const student = new StudentModel(item);
    return await student.save();
  }

  async update(id: string, data: Partial<IStudent>): Promise<IStudent> {
    const student = await StudentModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (!student) throw new Error('Student not found');

    return student;
  }

  async delete(id: string): Promise<boolean> {
    const result = await StudentModel.findByIdAndDelete(id).exec();

    return !!result;
  }

  async findOne(id: string): Promise<IStudent> {
    const student = await StudentModel.findById(id).exec();
    if (!student) throw new Error('No student found');

    return student;
  }

  async findAll(): Promise<IStudent[]> {
    return await StudentModel.find({}).exec();
  }
}

export { StudentRepository };
