"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_module_1 = require("./book/book.module");
const user_module_1 = require("./user/user.module");
const major_module_1 = require("./major/major.module");
const path_1 = require("path");
const lecture_module_1 = require("./lecture/lecture.module");
const attendance_module_1 = require("./attendance/attendance.module");
const mailer_1 = require("@nestjs-modules/mailer");
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: 'smtp.gmail.com',
                    port: 465,
                    ignoreTLS: true,
                    secure: true,
                    auth: {
                        user: "hkithkit75@gmail.com",
                        pass: "bvqa heai malh lptm"
                    },
                },
                defaults: {
                    from: '"No Reply" <no-reply@gmail.com>',
                },
                preview: false,
                template: {
                    dir: process.cwd() + '/template/',
                    adapter: new ejs_adapter_1.EjsAdapter(),
                    options: {
                        strict: true,
                    },
                },
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'oliver',
                database: 'school',
                entities: [(0, path_1.join)(__dirname, '**', '*.entity.{ts,js}')],
                synchronize: true,
                autoLoadEntities: true,
            }),
            book_module_1.BookModule,
            user_module_1.UserModule,
            major_module_1.MajorModule,
            lecture_module_1.LectureModule,
            attendance_module_1.AttendanceModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map