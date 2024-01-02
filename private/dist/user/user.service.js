"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const student_entity_1 = require("./entities/student.entity");
const teacher_entity_1 = require("./entities/teacher.entity");
const admin_entity_1 = require("./entities/admin.entity");
const jwt_1 = require("@nestjs/jwt");
const hash_1 = require("../utils/hash");
const errorhandling_1 = require("../utils/errorhandling");
const mailer_1 = require("@nestjs-modules/mailer");
const constants_1 = require("../utils/constants");
let UserService = class UserService {
    constructor(adminRepository, studentRepository, teacherRepository, jwtService, mailerService) {
        this.adminRepository = adminRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.jwtService = jwtService;
        this.mailerService = mailerService;
    }
    createStudent(createStudentDto) {
        const data = this.studentRepository.create(createStudentDto);
        if (!data.major || data.major == null) {
            throw new errorhandling_1.UserStudentError();
        }
        return this.studentRepository.save(data);
    }
    async findAllStudent() {
        return await this.studentRepository.createQueryBuilder('student')
            .innerJoinAndSelect('student.major', 'major')
            .orderBy('student.student_id', 'ASC').getMany();
    }
    findOneStudent(id) {
        return this.studentRepository.createQueryBuilder("student")
            .innerJoinAndSelect('student.major', 'major')
            .where("student.student_id = :id", { id: id }).getOne();
    }
    updateStudent(id, updateStudentDto) {
        return this.studentRepository.update(id, updateStudentDto);
    }
    removeStudent(id) {
        return this.studentRepository.delete(id);
    }
    createTeacher(createTeacherDto) {
        const data = this.teacherRepository.create(createTeacherDto);
        return this.teacherRepository.save(data);
    }
    findAllTeacher() {
        return this.teacherRepository.find();
    }
    findOneTeacher(id) {
        return this.teacherRepository.createQueryBuilder("teacher")
            .where("teacher.teacher_id = :id", { id: id }).getOne();
    }
    updateTeacher(id, updateTeacherDto) {
        return this.teacherRepository.update(id, updateTeacherDto);
    }
    removeTeacher(id) {
        return this.teacherRepository.delete(id);
    }
    createAdmin(createAdminDto) {
        const data = this.adminRepository.create(createAdminDto);
        return this.adminRepository.save(data);
    }
    findAllAdmin() {
        return this.adminRepository.find();
    }
    findOneAdmin(id) {
        return this.adminRepository.createQueryBuilder("admin")
            .where("admin.admin_id = :id", { id: id }).getOne();
    }
    updateAdmin(id, updateAdminDto) {
        return this.adminRepository.update(id, updateAdminDto);
    }
    removeAdmin(id) {
        return this.adminRepository.delete(id);
    }
    async login(id, password) {
        var data;
        var payload = {
            id: '',
            name: '',
            role: '',
        };
        if (id.substring(0, 1) == "A") {
            data = await this.adminRepository.findOneBy({ admin_id: id });
            payload.id = data.admin_id;
            payload.role = 'admin';
        }
        else if (id.substring(0, 1) == "S") {
            data = await this.studentRepository.findOneBy({ student_id: id });
            payload.id = data.student_id;
            payload.role = 'student';
        }
        else if (id.substring(0, 1) == "T") {
            data = await this.teacherRepository.findOneBy({ teacher_id: id });
            payload.id = data.teacher_id;
            payload.role = 'teacher';
        }
        else {
            return {
                "statusCode": 401,
                "msg": "User did not exist"
            };
        }
        payload.name = data.name;
        const token = await this.jwtService.sign(payload);
        if (await (0, hash_1.checkPassword)(password, data["password"])) {
            return {
                "statusCode": 200,
                "msg": "login success",
                access_token: token,
                data: payload,
                role: payload.role
            };
        }
        else {
            return {
                "statusCode": 401,
                "msg": "Password did not match"
            };
        }
    }
    async forgetPWByEmail(email, verifyUrl) {
        var _rtn = {
            "statusCode": 200,
            "msg": "mail success",
        };
        const promise1 = new Promise(async (resolve, reject) => {
            try {
                var _info = null;
                var role = "";
                var userId = "";
                var id = "";
                _info = await this.studentRepository.createQueryBuilder("student")
                    .where("student.email = :email", { email: email }).getOne();
                if (_info) {
                    role = "student";
                    userId = _info.student_id;
                    id = _info.id;
                }
                if (!_info) {
                    _info = await this.teacherRepository.createQueryBuilder("teacher")
                        .where("teacher.email = :email", { email: email }).getOne();
                    if (_info) {
                        role = "teacher";
                        userId = _info.teacher_id;
                        id = _info.id;
                    }
                }
                if (!_info) {
                    _info = await this.adminRepository.createQueryBuilder("admin")
                        .where("admin.email = :email", { email: email }).getOne();
                    if (_info) {
                        role = "admin";
                        userId = _info.admin_id;
                        id = _info.id;
                    }
                }
                var name = _info.name;
                var payload = {
                    id: id,
                    name: name,
                    role: role
                };
                const token = await this.jwtService.sign(payload);
                var _verifyUrl = verifyUrl + token;
                console.log(token);
                this.mailerService
                    .sendMail({
                    to: email,
                    from: 'no_reply@HKITCs412Group5.com',
                    subject: 'Request to change your password',
                    html: '<b>Dear ' + name + '</b> <p>There was a request to change your password.</p> <p>If you did not make this request then please ignore this email.</p> <p>Otherwise, please click this link to change your password: <a href="+' + _verifyUrl + '+">' + _verifyUrl + '</a></p>',
                })
                    .then(() => { resolve(_rtn); })
                    .catch(ex => { console.log(ex); _rtn.statusCode = 401; _rtn.msg = "error"; resolve(_rtn); });
            }
            catch (ex) {
                _rtn.statusCode = 401;
                _rtn.msg = "error";
                resolve(_rtn);
            }
        });
        await promise1.then((value) => {
            return value;
        });
        return _rtn;
    }
    async verifyForgetPW(newPW, token) {
        console.log(token.split(' ')[1]);
        const payload = await this.jwtService.verifyAsync(token.split(' ')[1], {
            secret: constants_1.jwtConstants.secret
        });
        if (payload.role == "student") {
            return this.updateStudent(payload.id, { "password": newPW });
        }
        else if (payload.role == "teacher") {
            return this.updateTeacher(payload.id, { "password": newPW });
        }
        else if (payload.role == "admin") {
            return this.updateAdmin(payload.id, { "password": newPW });
        }
        return newPW;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __param(1, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __param(2, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        mailer_1.MailerService])
], UserService);
//# sourceMappingURL=user.service.js.map