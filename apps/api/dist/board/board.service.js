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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./entities/board.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async create(createBoardDto) {
        const board = await this.boardRepository.save({
            name: createBoardDto.name,
            id: createBoardDto.id
        });
        return { board };
    }
    async findAll() {
        return await this.boardRepository.find({
            relations: {
                sub_list: true,
                history: true,
                tasks_list: true
            }
        });
    }
    async findOne(id) {
        this.validUUID(id);
        await this.isExist(id);
        return await this.boardRepository.findOne({
            where: {
                id
            },
            relations: {
                history: true,
                tasks_list: true,
                sub_list: true
            }
        });
    }
    async update(id, updateBoardDto) {
        this.validUUID(id);
        await this.isExist(id);
        await this.boardRepository.update(id, updateBoardDto);
        return this.findOne(id);
    }
    async remove(id) {
        this.validUUID(id);
        await this.isExist(id);
        await this.boardRepository.delete(id);
        return { id };
    }
    async isExist(id) {
        const isExist = await this.boardRepository.findOne({
            where: { id }
        });
        if (!isExist)
            throw new common_1.NotFoundException('Board id not found');
    }
    validUUID(id) {
        if (!(0, uuid_1.validate)(id))
            throw new common_1.NotFoundException('Category ID is not valid');
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
//# sourceMappingURL=board.service.js.map