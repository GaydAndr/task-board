import { Board } from "../../board/entities/board.entity";
import { Task } from "../../tasks/entities/task.entity";
export declare class History {
    id: string;
    board: Board;
    task: Task;
    person: string;
    act: string;
    task_name: string;
    task_rename: string;
    act_from: string;
    act_to: string;
    transfer_date: Date;
}
