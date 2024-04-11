import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateSubListDto} from './dto/create-sub_list.dto';
import {UpdateSubListDto} from './dto/update-sub_list.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {SubList} from "./entities/sub_list.entity";
import {Repository} from "typeorm";
import {validate as isValidUUID} from 'uuid'

@Injectable()
export class SubListService {
  constructor(
    @InjectRepository(SubList)
    private subListRepository: Repository<SubList>
  ) {
  }

  async create(createSubListDto: CreateSubListDto) {
    // const isExist = await this.subListRepository.findBy({
    // board: {id}
    // name: createSubListDto.name
    // })
    // if (isExist) throw new BadRequestException('This name already exist')

    const newSubList = this.subListRepository.create({
      name: createSubListDto.name,
      board: createSubListDto.board
    })
    return await this.subListRepository.save(newSubList);
  }

  async createDefaultSubLists(id: string) {
    const names = ["To Do", "Planned", "In Progress", "Closed"];
    const subLists = names
      .map(name => this.subListRepository.create({
        name,
        board: {id}
      }));
    return await this.subListRepository.save(subLists);
  }

  async findAll(id: string) {
    this.validUUID(id)
    return await this.subListRepository.find({
      where: {
        board: {id},
      },
      relations: {
        board: true
      }
    });
  }

  async findOne(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    return await this.subListRepository.findOne({
      where: {id},
      relations: {
        board: true
      }
    })
  }

  async update(id: string, updateSubListDto: UpdateSubListDto) {
    this.validUUID(id)
    await this.isExist(id)
    return await this.subListRepository.update(id, updateSubListDto);
  }

  async remove(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    await this.subListRepository.delete(id);
    return id
  }

  async isExist(id: string) {
    const isExist = await this.subListRepository.findOne({
      where: {id}
    })
    if (!isExist) throw new NotFoundException('Category not found')
  }

  validUUID(id: string) {
    if (!isValidUUID(id)) throw new NotFoundException(
      'Category ID is not valid'
    )
  }
}
