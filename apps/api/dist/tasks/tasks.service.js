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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const typeorm_2 = require("typeorm");
const uuid_1 = require("uuid");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(createTaskDto) {
        const newTask = this.taskRepository.create({
            name: createTaskDto.name,
            status: createTaskDto.status,
            priority: createTaskDto.priority,
            due_date: createTaskDto.due_date,
            description: createTaskDto.description,
            board: createTaskDto.board
        });
        return await this.taskRepository.save(newTask);
    }
    async findAll(id) {
        this.validUUID(id);
        return await this.taskRepository.find({
            where: {
                board: { id }
            },
            relations: {}
        });
    }
    async findOne(id) {
        this.validUUID(id);
        await this.isExist(id);
        return await this.taskRepository.findOne({
            where: { id },
            relations: {
                history: true,
            }
        });
    }
    async update(id, updateTaskDto) {
        this.validUUID(id);
        await this.isExist(id);
        await this.taskRepository.update(id, updateTaskDto);
        return await this.taskRepository.findOne({
            where: { id }
        });
    }
    async remove(id) {
        this.validUUID(id);
        await this.isExist(id);
        await this.taskRepository.delete(id);
        return { id };
    }
    async isExist(id) {
        const isExist = await this.taskRepository.findOne({
            where: { id }
        });
        if (!isExist)
            throw new common_1.NotFoundException('TaskCard not found');
    }
    validUUID(id) {
        if (!(0, uuid_1.validate)(id))
            throw new common_1.NotFoundException('Category ID is not valid');
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map