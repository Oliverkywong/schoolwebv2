import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    create(createAttendanceDto: CreateAttendanceDto): Promise<import("./entities/attendance.entity").Attendance>;
    findAll(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateAttendanceDto: UpdateAttendanceDto): string;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
