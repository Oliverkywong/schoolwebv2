import { Book } from '../../book/entities/book.entity';
import { Lecture } from '../../lecture/entities/lecture.entity';
export declare class Teacher {
    id: number;
    teacher_id: string;
    name: string;
    password: string;
    email: string;
    books: Book[];
    lectures?: Lecture[];
    created_at: Date;
    updated_at: Date;
}
