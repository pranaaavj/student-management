"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Person = exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.Person = Person;
class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }
    getDetails() {
        return `Student ${this.name}: Grade - ${this.grade}`;
    }
    getGrade() {
        return this.grade;
    }
    setGrade(newGrade) {
        this.grade = newGrade;
    }
}
exports.Student = Student;
const studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    grade: { type: String, required: true },
});
studentSchema.methods.getDetails = function () {
    return `Student ${this.name}, Grade ${this.grade}`;
};
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.StudentModel = StudentModel;
