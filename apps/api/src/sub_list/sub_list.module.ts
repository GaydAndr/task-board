import { Module } from '@nestjs/common';
import { SubListService } from './sub_list.service';
import { SubListController } from './sub_list.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {SubList} from "./entities/sub_list.entity";

@Module({
  imports:[
    TypeOrmModule.forFeature([SubList])
  ],
  controllers: [SubListController],
  providers: [SubListService],
  exports:[SubListService]
})
export class SubListModule {}
