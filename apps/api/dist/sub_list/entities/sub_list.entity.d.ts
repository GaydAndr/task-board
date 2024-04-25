import { Board } from "../../board/entities/board.entity";
import { Task } from "../../tasks/entities/task.entity";
export declare class SubList {
    id: string;
    name: string;
    order: number;
    board: Board;
    task: Task;
}
