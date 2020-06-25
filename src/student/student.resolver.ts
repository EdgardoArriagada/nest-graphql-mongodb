import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './create-student.input';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  //   @Query(returns => StudentType)
  //   student(@Args('id') id: string) {
  //     return this.studentService.getStudent(id);
  //   }

  @Mutation(returns => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  //   @Query(returns => [StudentType])
  //   lessons() {
  //     return this.studentService.getLessons();
  //   }
}
