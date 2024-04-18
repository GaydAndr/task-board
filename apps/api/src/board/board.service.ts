import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {CreateBoardDto} from './dto/create-board.dto';
import {UpdateBoardDto} from './dto/update-board.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Board} from "./entities/board.entity";
import {Repository} from "typeorm";
import {validate as isValidUUID} from 'uuid'

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>
  ) {
  }

  async create(createBoardDto: CreateBoardDto) {
    const board = await this.boardRepository.save({
      name: createBoardDto.name,
      id: createBoardDto.id
    })
    return {board}
  }

  async findAll() {
    return await this.boardRepository.find({
      relations: {
        sub_list: true,
        history: true,
        tasks_list: true
      }
    })
  }

  async findOne(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    return await this.boardRepository.findOne({
      where: {
        id
      },
      relations: {
        history: true,
        tasks_list: true,
        sub_list: true
      }
    })
  }

  async update(id: string, updateBoardDto: UpdateBoardDto) {
    this.validUUID(id)
    await this.isExist(id)
    await this.boardRepository.update(id, updateBoardDto);
    return this.findOne(id)
  }

  async remove(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    await this.boardRepository.delete(id);
    return {id}
  }

  async isExist(id: string) {
    const isExist = await this.boardRepository.findOne({
      where: {id}
    })
    if (!isExist) throw new NotFoundException('Board id not found')
  }

  validUUID(id: string) {
    if (!isValidUUID(id)) throw new NotFoundException(
      'Category ID is not valid'
    )
  }
}
