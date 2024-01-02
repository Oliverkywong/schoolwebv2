import { Student } from '../../user/entities/student.entity';
import { Teacher } from '../../user/entities/teacher.entity';
export declare class Book {
    book_id: number;
    name: string;
    category: string;
    author: string;
    description: string;
    available: boolean;
    student: Student['student_id'];
    teacher: Teacher['teacher_id'];
    created_at: Date;
    updated_at: Date;
}
