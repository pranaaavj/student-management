"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRepository = void 0;
const student_model_1 = require("../models/student.model");
class StudentRepository {
    constructor() { }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = new student_model_1.StudentModel(item);
            return yield student.save();
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.StudentModel.findByIdAndUpdate(id, data, {
                new: true,
            }).exec();
            if (!student)
                throw new Error('Student not found');
            return student;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield student_model_1.StudentModel.findByIdAndDelete(id).exec();
            return !!result;
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_model_1.StudentModel.findById(id).exec();
            if (!student)
                throw new Error('No student found');
            return student;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield student_model_1.StudentModel.find({}).exec();
        });
    }
}
exports.StudentRepository = StudentRepository;
