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
exports.Student = void 0;
const book_entity_1 = require("../../book/entities/book.entity");
const lecture_entity_1 = require("../../lecture/entities/lecture.entity");
const major_entity_1 = require("../../major/entities/major.entity");
const typeorm_1 = require("typeorm");
let Student = class Student {
};
exports.Student = Student;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Student.prototype, "student_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => major_entity_1.Major),
    (0, typeorm_1.JoinColumn)({ name: "major", referencedColumnName: "major_id" }),
    __metadata("design:type", major_entity_1.Major)
], Student.prototype, "major", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.Book, (book) => book.student),
    __metadata("design:type", Array)
], Student.prototype, "books", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => lecture_entity_1.Lecture, lecture => lecture.students),
    (0, typeorm_1.JoinTable)({
        name: 'student_lecture',
        joinColumn: {
            name: 'student_id',
            referencedColumnName: 'student_id',
        },
        inverseJoinColumn: {
            name: 'lecture_id',
            referencedColumnName: 'lecture_id',
        },
    }),
    __metadata("design:type", Array)
], Student.prototype, "lectures", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Student.prototype, "updated_at", void 0);
exports.Student = Student = __decorate([
    (0, typeorm_1.Entity)()
], Student);
//# sourceMappingURL=student.entity.js.map