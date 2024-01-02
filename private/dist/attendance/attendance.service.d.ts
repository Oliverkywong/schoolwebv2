import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Repository } from 'typeorm';
import { Attendance } from './entities/attendance.entity';
export declare class AttendanceService {
    private readonly attendanceRepository;
    constructor(attendanceRepository: Repository<Attendance>);
    create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance>;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateAttendanceDto: UpdateAttendanceDto): string;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
