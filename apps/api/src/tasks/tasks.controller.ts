import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {TasksService} from './tasks.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';

@Controller('task')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Body() createTaskDto: CreateTaskDto
  ) {
    return this.tasksService.create(createTaskDto);
  }

  @Get('all/:id')
  findAll(@Param('id') id: string) {
    return this.tasksService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
