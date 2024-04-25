import { Board } from "../../board/entities/board.entity";
export declare class CreateTaskDto {
    name: string;
    status: string;
    due_date: string;
    priority: string;
    description?: string;
    board: Board;
}
