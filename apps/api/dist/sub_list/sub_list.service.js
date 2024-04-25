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
exports.SubListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const sub_list_entity_1 = require("./entities/sub_list.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let SubListService = class SubListService {
    constructor(subListRepository) {
        this.subListRepository = subListRepository;
    }
    async create(createSubListDto) {
        const newSubList = this.subListRepository.create({
            name: createSubListDto.name,
            board: createSubListDto.board
        });
        return await this.subListRepository.save(newSubList);
    }
    async createDefaultSubLists(id) {
        const names = ["To Do", "Planned", "In Progress", "Closed"];
        const subLists = names
            .map(name => this.subListRepository.create({
            name,
            board: { id }
        }));
        return await this.subListRepository.save(subLists);
    }
    async findAll(id) {
        this.validUUID(id);
        return await this.subListRepository.find({
            where: {
                board: { id },
            },
            relations: {
                board: true
            }
        });
    }
    async findOne(id) {
        this.validUUID(id);
        await this.isExist(id);
        return await this.subListRepository.findOne({
            where: { id },
            relations: {
                board: true
            }
        });
    }
    async update(id, updateSubListDto) {
        this.validUUID(id);
        await this.isExist(id);
        await this.subListRepository.update(id, updateSubListDto);
        return this.findOne(id);
    }
    async remove(id) {
        this.validUUID(id);
        await this.isExist(id);
        await this.subListRepository.delete(id);
        return { id };
    }
    async swapOrder(items) {
        if (items.length !== 2) {
            throw new common_1.NotFoundException('You must provide exactly two items to swap.');
        }
        const item1 = await this.findOne(items[0].id);
        const item2 = await this.findOne(items[1].id);
        if (!item1 || !item2) {
            throw new common_1.NotFoundException('One or both items not found');
        }
        const order1 = item1.order;
        const order2 = item2.order;
        await this.subListRepository.update(item1.id, { ...item1, order: order2 });
        await this.subListRepository.update(item2.id, { ...item2, order: order1 });
        return await this.findAll(item1.board.id);
    }
    async isExist(id) {
        const isExist = await this.subListRepository.findOne({
            where: { id }
        });
        if (!isExist)
            throw new common_1.NotFoundException('Category not found');
    }
    validUUID(id) {
        if (!(0, uuid_1.validate)(id))
            throw new common_1.NotFoundException('Category ID is not valid');
    }
};
exports.SubListService = SubListService;
exports.SubListService = SubListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sub_list_entity_1.SubList)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SubListService);
//# sourceMappingURL=sub_list.service.js.map