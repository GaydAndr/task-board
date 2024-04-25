"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubListDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sub_list_dto_1 = require("./create-sub_list.dto");
class UpdateSubListDto extends (0, mapped_types_1.PartialType)(create_sub_list_dto_1.CreateSubListDto) {
}
exports.UpdateSubListDto = UpdateSubListDto;
//# sourceMappingURL=update-sub_list.dto.js.map