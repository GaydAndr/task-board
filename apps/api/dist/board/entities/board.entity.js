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
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const history_entity_1 = require("../../history/entities/history.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
const sub_list_entity_1 = require("../../sub_list/entities/sub_list.entity");
let Board = class Board {
};
exports.Board = Board;
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.PrimaryColumn)({ name: 'board_id' }),
    __metadata("design:type", String)
], Board.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => history_entity_1.History, history => history.board, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Board.prototype, "history", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.board, { onDelete: "CASCADE" }),
    __metadata("design:type", Array)
], Board.prototype, "tasks_list", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sub_list_entity_1.SubList, (sub_list) => sub_list.board, { onDelete: "CASCADE", nullable: true }),
    __metadata("design:type", Array)
], Board.prototype, "sub_list", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Board.prototype, "createdAt", void 0);
exports.Board = Board = __decorate([
    (0, typeorm_1.Entity)()
], Board);
//# sourceMappingURL=board.entity.js.map