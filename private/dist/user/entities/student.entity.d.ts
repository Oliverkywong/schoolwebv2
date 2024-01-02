import { Book } from '../../book/entities/book.entity';
import { Lecture } from '../../lecture/entities/lecture.entity';
import { Major } from '../../major/entities/major.entity';
export declare class Student {
    id: number;
    student_id: string;
    name: string;
    password: string;
    email: string;
    major: Major;
    books: Book[];
    lectures?: Lecture[];
    created_at: Date;
    updated_at: Date;
}
