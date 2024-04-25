import { Task } from "../../tasks/entities/task.entity";
export declare class CreateHistoryDto {
    person: string;
    act: string;
    task_name?: string;
    task_rename?: string;
    act_from?: string;
    act_to?: string;
    transfer_date?: string;
    task?: Task;
}
