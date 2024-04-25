import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from "./entities/task.entity";
import { Repository } from "typeorm";
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto): Promise<Task>;
    findAll(id: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
    remove(id: string): Promise<{
        id: string;
    }>;
    isExist(id: string): Promise<void>;
    validUUID(id: string): void;
}
