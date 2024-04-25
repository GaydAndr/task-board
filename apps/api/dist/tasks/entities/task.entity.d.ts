import { Board } from "../../board/entities/board.entity";
import { History } from "../../history/entities/history.entity";
import { SubList } from "../../sub_list/entities/sub_list.entity";
export declare class Task {
    id: string;
    board: Board;
    sub_list: SubList;
    history: History[];
    name: string;
    status: string;
    due_date: string;
    priority: string;
    description: string;
    transfer_date: Date;
}
