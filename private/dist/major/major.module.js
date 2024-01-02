"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MajorModule = void 0;
const common_1 = require("@nestjs/common");
const major_service_1 = require("./major.service");
const major_controller_1 = require("./major.controller");
const typeorm_1 = require("@nestjs/typeorm");
const major_entity_1 = require("./entities/major.entity");
let MajorModule = class MajorModule {
};
exports.MajorModule = MajorModule;
exports.MajorModule = MajorModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([major_entity_1.Major])],
        controllers: [major_controller_1.MajorController],
        providers: [major_service_1.MajorService],
    })
], MajorModule);
//# sourceMappingURL=major.module.js.map