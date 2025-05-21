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
exports.StudentService = void 0;
class StudentService {
    constructor(repository) {
        this.repository = repository;
    }
    createStudent(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield this.repository.create({
                name: req.name,
                grade: req.grade,
            });
            return this.mapToResponse(student);
        });
    }
    getStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield this.repository.findOne(id);
            return this.mapToResponse(student);
        });
    }
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const students = yield this.repository.findAll();
            return students.map((student) => this.mapToResponse(student));
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.delete(id);
        });
    }
    updateStudent(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.repository.update(id, request);
            return this.mapToResponse(updated);
        });
    }
    mapToResponse(student) {
        return {
            id: student._id.toString(),
            name: student.name,
            grade: student.grade,
            details: student.getDetails(),
        };
    }
}
exports.StudentService = StudentService;
