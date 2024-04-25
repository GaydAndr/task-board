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
exports.HistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const history_entity_1 = require("./entities/history.entity");
const uuid_1 = require("uuid");
let HistoryService = class HistoryService {
    constructor(historyRepository) {
        this.historyRepository = historyRepository;
    }
    async create(createHistoryDto, task) {
        const newHistory = this.historyRepository.create({
            person: createHistoryDto.person,
            act: createHistoryDto.act,
            task_name: task.name,
            task_rename: createHistoryDto.task_rename,
            act_from: createHistoryDto.act_from,
            act_to: createHistoryDto.act_to,
            transfer_date: createHistoryDto.transfer_date,
            task: task,
            board: task.board
        });
        return await this.historyRepository.save(newHistory);
    }
    async findAll(id) {
        this.validUUID(id);
        return await this.historyRepository.find({
            where: {
                board: { id },
            },
            relations: {
                board: true,
                task: true
            }
        });
    }
    findOne(id) {
        return `This action returns a #${id} history`;
    }
    validUUID(id) {
        if (!(0, uuid_1.validate)(id))
            throw new common_1.NotFoundException('Category ID is not valid');
    }
};
exports.HistoryService = HistoryService;
exports.HistoryService = HistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(history_entity_1.History)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], HistoryService);
//# sourceMappingURL=history.service.js.map