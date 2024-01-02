import { CreateMajorDto } from './dto/create-major.dto';
import { UpdateMajorDto } from './dto/update-major.dto';
import { Repository } from 'typeorm';
import { Major } from './entities/major.entity';
export declare class MajorService {
    private readonly majorRepository;
    constructor(majorRepository: Repository<Major>);
    create(createMajorDto: CreateMajorDto): Promise<Major>;
    findAll(): Promise<Major[]>;
    find(id: string): Promise<Major[]>;
    update(id: number, updateMajorDto: UpdateMajorDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
