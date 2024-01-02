import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<import("./entities/book.entity").Book>;
    findByUserID(id: string): Promise<import("./entities/book.entity").Book[]>;
    findAll(): Promise<any>;
    getBysearch(query: {
        name: string;
        author: string;
    }): Promise<import("./entities/book.entity").Book[]>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
