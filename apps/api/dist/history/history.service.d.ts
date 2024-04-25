import { CreateHistoryDto } from './dto/create-history.dto';
import { Repository } from "typeorm";
import { History } from "./entities/history.entity";
import { Task } from "../tasks/entities/task.entity";
export declare class HistoryService {
    private historyRepository;
    constructor(historyRepository: Repository<History>);
    create(createHistoryDto: CreateHistoryDto, task: Task): Promise<History>;
    findAll(id: string): Promise<History[]>;
    findOne(id: number): string;
    validUUID(id: string): void;
}
