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
exports.Task = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("../../board/entities/board.entity");
const history_entity_1 = require("../../history/entities/history.entity");
const sub_list_entity_1 = require("../../sub_list/entities/sub_list.entity");
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { name: 'task_id' }),
    __metadata("design:type", String)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_entity_1.Board, (board) => board.tasks_list, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'board_id' }),
    __metadata("design:type", board_entity_1.Board)
], Task.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sub_list_entity_1.SubList, (subList) => subList.task, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'sub_list_id' }),
    __metadata("design:type", sub_list_entity_1.SubList)
], Task.prototype, "sub_list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, (history) => history.board),
    __metadata("design:type", Array)
], Task.prototype, "history", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "due_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Task.prototype, "transfer_date", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);
//# sourceMappingURL=task.entity.js.map