import { PartialType } from '@nestjs/mapped-types';
import { CreateSubListDto } from './create-sub_list.dto';

export class UpdateSubListDto extends PartialType(CreateSubListDto) {}
