import { CreateBookDto } from './create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    book_id: number;
    available: boolean;
    student?: String;
    teacher?: String;
}
export {};
