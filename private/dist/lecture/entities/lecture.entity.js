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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lecture = void 0;
const teacher_entity_1 = require("../../user/entities/teacher.entity");
const student_entity_1 = require("../../user/entities/student.entity");
const typeorm_1 = require("typeorm");
let Lecture = class Lecture {
};
exports.Lecture = Lecture;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Lecture.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Lecture.prototype, "lecture_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "start_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "end_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Lecture.prototype, "sem", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Lecture.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Lecture.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => student_entity_1.Student, student => student.lectures),
    __metadata("design:type", Array)
], Lecture.prototype, "students", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => teacher_entity_1.Teacher, teacher => teacher.lectures),
    __metadata("design:type", Array)
], Lecture.prototype, "teachers", void 0);
exports.Lecture = Lecture = __decorate([
    (0, typeorm_1.Entity)()
], Lecture);
//# sourceMappingURL=lecture.entity.js.map