import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateHistoryDto} from './dto/create-history.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {History} from "./entities/history.entity";
import {Task} from "../tasks/entities/task.entity";
import {validate as isValidUUID} from 'uuid'

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(History)
    private historyRepository: Repository<History>
  ) {
  }

  async create(createHistoryDto: CreateHistoryDto, task: Task) {
    const newHistory = this.historyRepository.create({
      person:createHistoryDto.person,
      act:createHistoryDto.act,
      task_name: task.name,
      task_rename:createHistoryDto.task_rename,
      act_from:createHistoryDto.act_from,
      act_to:createHistoryDto.act_to,
      transfer_date:createHistoryDto.transfer_date,
      task: task,
      board: task.board
    })
    return await this.historyRepository.save(newHistory);
  }

  async findAll(id:string) {
    this.validUUID(id)
    return await this.historyRepository.find({
      where: {
        board: {id},
      },
      relations:{
        board:true,
        task:true
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  validUUID(id: string) {
    if (!isValidUUID(id)) throw new NotFoundException(
      'Category ID is not valid'
    )
  }
}
