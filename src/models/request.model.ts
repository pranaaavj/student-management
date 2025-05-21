interface CreateStudentRequest {
  name: string;
  grade: string;
}

interface UpdateStudentRequest {
  name?: string;
  grade?: string;
}

export { CreateStudentRequest, UpdateStudentRequest };
