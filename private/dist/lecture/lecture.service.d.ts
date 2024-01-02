import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { Repository } from 'typeorm';
import { Lecture } from './entities/lecture.entity';
export declare class LectureService {
    private readonly lectureRepository;
    constructor(lectureRepository: Repository<Lecture>);
    create(createLectureDto: CreateLectureDto): Promise<Lecture>;
    findAll(): Promise<Lecture[]>;
    findOne(id: number): string;
    findlectureStudent(id: string): Promise<Lecture[]>;
    findlectureTeacher(id: string): Promise<Lecture[]>;
    update(id: number, updateLectureDto: UpdateLectureDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
