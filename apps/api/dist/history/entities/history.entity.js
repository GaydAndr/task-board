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
exports.History = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("../../board/entities/board.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
let History = class History {
};
exports.History = History;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { name: 'history_id' }),
    __metadata("design:type", String)
], History.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_entity_1.Board, (board) => board.history),
    (0, typeorm_1.JoinColumn)({ name: 'board_id' }),
    __metadata("design:type", board_entity_1.Board)
], History.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => task_entity_1.Task, (task) => task.history),
    (0, typeorm_1.JoinColumn)({ name: 'task_id' }),
    __metadata("design:type", task_entity_1.Task)
], History.prototype, "task", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "person", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "act", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "task_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], History.prototype, "task_rename", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], History.prototype, "act_from", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], History.prototype, "act_to", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], History.prototype, "transfer_date", void 0);
exports.History = History = __decorate([
    (0, typeorm_1.Entity)()
], History);
//# sourceMappingURL=history.entity.js.map