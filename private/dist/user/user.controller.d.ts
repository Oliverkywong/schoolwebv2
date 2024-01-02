import { UserService } from './user.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    verifyForgetPW(body: {
        newPW: string;
    }, req: any): Promise<string | import("typeorm").UpdateResult>;
    forgetPWByEmail(body: {
        email: string;
        verifyUrl: string;
    }): Promise<{
        statusCode: number;
        msg: string;
    }>;
    login(body: {
        id: string;
        password: string;
    }): Promise<{
        statusCode: number;
        msg: string;
        access_token?: undefined;
        data?: undefined;
        role?: undefined;
    } | {
        statusCode: number;
        msg: string;
        access_token: string;
        data: {
            id: string;
            name: string;
            role: string;
        };
        role: string;
    }>;
    createStudent(createStudentDto: CreateStudentDto): Promise<import("./entities/student.entity").Student>;
    findAllStudent(): Promise<import("./entities/student.entity").Student[]>;
    findOneStudent(id: string): Promise<import("./entities/student.entity").Student>;
    updateStudent(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    removeStudent(id: string): Promise<import("typeorm").DeleteResult>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<import("./entities/teacher.entity").Teacher>;
    findAllTeacher(): Promise<import("./entities/teacher.entity").Teacher[]>;
    findOneTeacher(id: string): Promise<import("./entities/teacher.entity").Teacher>;
    updateTeacher(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("typeorm").UpdateResult>;
    removeTeacher(id: string): Promise<import("typeorm").DeleteResult>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<import("./entities/admin.entity").Admin>;
    findAllAdmin(): Promise<import("./entities/admin.entity").Admin[]>;
    findOneAdmin(id: string): Promise<import("./entities/admin.entity").Admin>;
    updateAdmin(id: string, updateAdminDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    removeAdmin(id: string): Promise<import("typeorm").DeleteResult>;
}
