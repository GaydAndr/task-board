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
      relations:{
        sub_list:true,
        history:true,
        tasks_list:true
      }
    })
  }

  async findOne(id: string) {
    this.validUUID(id)
    const isExist = await this.boardRepository.findOne({
      where: {id}
    })
    if (!isExist) throw new NotFoundException('Board not found')

    return await this.boardRepository.findOne({
      where: {
        id
      },
      relations: {
        history: true,
        tasks_list: true,
        sub_list:true
      }
    })
  }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  async remove(id: string) {
    this.validUUID(id)
    const isExist = await this.boardRepository.findOne({
      where: {id}
    })

    if (!isExist) throw new BadRequestException('Category not found')
    await this.boardRepository.delete(id);
    return id
  }

  validUUID(id: string) {
    if (!isValidUUID(id)) throw new NotFoundException(
      'Category ID is not valid'
    )
  }
}
