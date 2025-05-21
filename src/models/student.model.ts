import { Schema, Document, model, Types } from 'mongoose';

abstract class Person {
  constructor(protected name: string) {}

  abstract getDetails(): string;

  getName(): string {
    return this.name;
  }
}

class Student extends Person {
  constructor(name: string, private grade: string) {
    super(name);
  }

  getDetails(): string {
    return `Student ${this.name}: Grade - ${this.grade}`;
  }

  getGrade(): string {
    return this.grade;
  }

  setGrade(newGrade: string): void {
    this.grade = newGrade;
  }
}

interface IStudentData {
  name: string;
  grade: string;
}

interface IStudentDocument extends Document, IStudentData {
  _id: Types.ObjectId;
  getDetails(): string;
}

const studentSchema = new Schema<IStudentDocument>({
  name: { type: String, required: true },
  grade: { type: String, required: true },
});

studentSchema.methods.getDetails = function () {
  return `Student ${this.name}, Grade ${this.grade}`;
};

const StudentModel = model<IStudentDocument>('Student', studentSchema);

export { StudentModel, IStudentData, IStudentDocument, Person, Student };
