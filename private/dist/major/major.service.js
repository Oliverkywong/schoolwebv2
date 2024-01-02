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
exports.MajorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const major_entity_1 = require("./entities/major.entity");
let MajorService = class MajorService {
    constructor(majorRepository) {
        this.majorRepository = majorRepository;
    }
    create(createMajorDto) {
        const data = this.majorRepository.create(createMajorDto);
        return this.majorRepository.save(data);
    }
    findAll() {
        return this.majorRepository.find();
    }
    find(id) {
        return this.majorRepository
            .createQueryBuilder("major")
            .where("major.major_id like :major_id", { major_id: `%${id}%` })
            .getMany();
    }
    update(id, updateMajorDto) {
        return `This action updates a #${id} major`;
    }
    remove(id) {
        return this.majorRepository.delete(id);
    }
};
exports.MajorService = MajorService;
exports.MajorService = MajorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(major_entity_1.Major)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MajorService);
//# sourceMappingURL=major.service.js.map