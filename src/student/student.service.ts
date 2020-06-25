import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

import { Student } from './student.entity';
import { CreateStudentInput } from './create-student.input';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { firstName, lastName } = createStudentInput;
    console.log({ firstName, lastName });

    const student = this.studentRepository.create({
      id: uuid(),
      firstName,
      lastName,
    });

    return this.studentRepository.save(student);
  }
}
