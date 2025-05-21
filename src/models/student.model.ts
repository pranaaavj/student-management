import { Schema, Document, model, Types } from 'mongoose';

interface IPerson {
  name: string;
  getDetails(): string;
}

interface IStudent extends IPerson, Document {
  _id: Types.ObjectId;
  grade: string;
}

const studentSchema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
});

studentSchema.methods.getDetails = function () {
  return `Student ${this.name}, Grade ${this.grade}`;
};

const StudentModel = model<IStudent>('Student', studentSchema);

export { StudentModel, IStudent, IPerson };
