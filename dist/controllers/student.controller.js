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
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = req.body;
                const student = yield this.studentService.createStudent(request);
                res.status(200).json(student);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Something unexpected occurred.' });
                }
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const student = yield this.studentService.getStudent(id);
                res.status(200).json(student);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Something unexpected occurred.' });
                }
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.getAllStudents();
                console.log(students);
                res.status(200).json(students);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(500).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: 'Something unexpected occurred.' });
                }
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const request = req.body;
                const updated = yield this.studentService.updateStudent(id, request);
                res.status(200).json(updated);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({ error: error.message });
                }
                else {
                    res.status(404).json({ error: 'Something unexpected occurred.' });
                }
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deleted = yield this.studentService.deleteStudent(id);
                res.status(200).json({ deleted });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(404).json({ error: error.message });
                }
                else {
                    res.status(404).json({ error: 'Something unexpected occurred.' });
                }
            }
        });
    }
}
exports.StudentController = StudentController;
