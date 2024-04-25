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
exports.SubList = void 0;
const typeorm_1 = require("typeorm");
const board_entity_1 = require("../../board/entities/board.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
let SubList = class SubList {
};
exports.SubList = SubList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid', { name: 'sub_list_id' }),
    __metadata("design:type", String)
], SubList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SubList.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Generated)("increment"),
    __metadata("design:type", Number)
], SubList.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_entity_1.Board, (board) => board.sub_list, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'board_id' }),
    __metadata("design:type", board_entity_1.Board)
], SubList.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.sub_list, { onDelete: 'CASCADE', eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'task_id' }),
    __metadata("design:type", task_entity_1.Task)
], SubList.prototype, "task", void 0);
exports.SubList = SubList = __decorate([
    (0, typeorm_1.Entity)()
], SubList);
//# sourceMappingURL=sub_list.entity.js.map