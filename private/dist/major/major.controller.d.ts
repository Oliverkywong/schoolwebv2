import { MajorService } from './major.service';
import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
export declare class MajorController {
    private readonly majorService;
    constructor(majorService: MajorService);
    create(createMajorDto: CreateMajorDto): Promise<import("./entities/major.entity").Major>;
    findAll(): Promise<import("./entities/major.entity").Major[]>;
    findOne(id: string): Promise<import("./entities/major.entity").Major[]>;
    update(id: string, updateMajorDto: UpdateMajorDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
