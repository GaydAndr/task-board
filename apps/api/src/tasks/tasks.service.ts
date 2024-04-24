import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";
import {validate as isValidUUID} from 'uuid'


@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {
  }

  async create(createTaskDto: CreateTaskDto) {
    const newTask = this.taskRepository.create({
      name: createTaskDto.name,
      status: createTaskDto.status,
      priority: createTaskDto.priority,
      due_date: createTaskDto.due_date,
      description: createTaskDto.description,
      board: createTaskDto.board
    })
    return await this.taskRepository.save(newTask);
  }

  async findAll(id: string) {
    this.validUUID(id)
    return await this.taskRepository.find({
      where: {
        board: {id}
      },
      relations: {
        // board:true,
        // history:true
      }
    })
  }

  async findOne(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    return await this.taskRepository.findOne({
      where: {id},
      relations: {
        history: true,
        // board: true
      }
    })
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    this.validUUID(id)
    await this.isExist(id)
    await this.taskRepository.update(id, updateTaskDto);
    return await this.taskRepository.findOne({
      where: {id}
    })
  }

  async remove(id: string) {
    this.validUUID(id)
    await this.isExist(id)
    await this.taskRepository.delete(id);
    return {id};
  }

  async isExist(id: string) {
    const isExist = await this.taskRepository.findOne({
      where: {id}
    })
    if (!isExist) throw new NotFoundException('TaskCard not found')
  }

  validUUID(id: string) {
    if (!isValidUUID(id)) throw new NotFoundException(
      'Category ID is not valid'
    )
  }
}
