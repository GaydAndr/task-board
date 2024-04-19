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
    await this.subListRepository.update(id, updateSubListDto);
    return this.findOne(id)
  }

  async remove(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    await this.subListRepository.delete(id);
    return {id}
  }

  async swapOrder(items: SubList[]) {
    if (items.length !== 2) {
      throw new NotFoundException('You must provide exactly two items to swap.');
    }
    const item1 = await this.findOne(items[0].id)
    const item2 = await this.findOne(items[1].id)

    if (!item1 || !item2) {
      throw new NotFoundException('One or both items not found');
    }

    const order1 = item1.order;
    const order2 = item2.order;

    await this.subListRepository.update(item1.id, {...item1, order: order2});
    await this.subListRepository.update(item2.id, {...item2, order: order1});
    return await this.findAll(item1.board.id)
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
