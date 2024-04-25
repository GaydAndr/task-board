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
exports.SubListController = void 0;
const common_1 = require("@nestjs/common");
const sub_list_service_1 = require("./sub_list.service");
const create_sub_list_dto_1 = require("./dto/create-sub_list.dto");
const update_sub_list_dto_1 = require("./dto/update-sub_list.dto");
let SubListController = class SubListController {
    constructor(subListService) {
        this.subListService = subListService;
    }
    create(createSubListDto) {
        return this.subListService.create(createSubListDto);
    }
    createDefaultSubLists(id) {
        return this.subListService.createDefaultSubLists(id);
    }
    findAll(id) {
        return this.subListService.findAll(id);
    }
    findOne(id) {
        return this.subListService.findOne(id);
    }
    update(id, updateSubListDto) {
        return this.subListService.update(id, updateSubListDto);
    }
    swapOrder(updateSubListDto) {
        return this.subListService.swapOrder(updateSubListDto);
    }
    remove(id) {
        return this.subListService.remove(id);
    }
};
exports.SubListController = SubListController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sub_list_dto_1.CreateSubListDto]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('create-default/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "createDefaultSubLists", null);
__decorate([
    (0, common_1.Get)('all/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sub_list_dto_1.UpdateSubListDto]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('swap-order'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "swapOrder", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SubListController.prototype, "remove", null);
exports.SubListController = SubListController = __decorate([
    (0, common_1.Controller)('sub-list'),
    __metadata("design:paramtypes", [sub_list_service_1.SubListService])
], SubListController);
//# sourceMappingURL=sub_list.controller.js.map