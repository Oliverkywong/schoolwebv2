import { CreateStudentDto } from './create-student.dto';
declare const UpdateStudentDto_base: import("@nestjs/common").Type<Partial<CreateStudentDto>>;
export declare class UpdateStudentDto extends UpdateStudentDto_base {
    name?: string;
    email?: string;
    password?: string;
}
export {};
