"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    grade: { type: String, required: true },
});
studentSchema.methods.getDetails = function () {
    return `Student ${this.name}, Grade ${this.grade}`;
};
const StudentModel = (0, mongoose_1.model)('Student', studentSchema);
exports.StudentModel = StudentModel;
