import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { Teacher } from './entities/teacher.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Admin } from './entities/admin.entity';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';
export declare class UserService {
    private readonly adminRepository;
    private readonly studentRepository;
    private readonly teacherRepository;
    private jwtService;
    private readonly mailerService;
    constructor(adminRepository: Repository<Admin>, studentRepository: Repository<Student>, teacherRepository: Repository<Teacher>, jwtService: JwtService, mailerService: MailerService);
    createStudent(createStudentDto: CreateStudentDto): Promise<Student>;
    findAllStudent(): Promise<Student[]>;
    findOneStudent(id: string): Promise<Student>;
    updateStudent(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    removeStudent(id: number): Promise<import("typeorm").DeleteResult>;
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAllTeacher(): Promise<Teacher[]>;
    findOneTeacher(id: string): Promise<Teacher>;
    updateTeacher(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("typeorm").UpdateResult>;
    removeTeacher(id: number): Promise<import("typeorm").DeleteResult>;
    createAdmin(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAllAdmin(): Promise<Admin[]>;
    findOneAdmin(id: string): Promise<Admin>;
    updateAdmin(id: number, updateAdminDto: UpdateAdminDto): Promise<import("typeorm").UpdateResult>;
    removeAdmin(id: number): Promise<import("typeorm").DeleteResult>;
    login(id: string, password: string): Promise<{
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
    forgetPWByEmail(email: string, verifyUrl: string): Promise<{
        statusCode: number;
        msg: string;
    }>;
    verifyForgetPW(newPW: string, token: string): Promise<string | import("typeorm").UpdateResult>;
}
