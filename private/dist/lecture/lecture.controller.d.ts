import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
export declare class LectureController {
    private readonly lectureService;
    constructor(lectureService: LectureService);
    create(createLectureDto: CreateLectureDto): Promise<import("./entities/lecture.entity").Lecture>;
    findAll(): Promise<import("./entities/lecture.entity").Lecture[]>;
    findlectureByID(id: string): Promise<import("./entities/lecture.entity").Lecture[]>;
    update(id: string, updateLectureDto: UpdateLectureDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
