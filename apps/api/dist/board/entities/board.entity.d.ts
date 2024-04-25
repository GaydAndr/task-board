import { History } from "../../history/entities/history.entity";
import { Task } from "../../tasks/entities/task.entity";
import { SubList } from "../../sub_list/entities/sub_list.entity";
export declare class Board {
    id: string;
    name: string;
    history: History[];
    tasks_list: Task[];
    sub_list: SubList[];
    createdAt: Date;
}
