import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {Task} from "../../tasks/entities/task.entity";

export class CreateHistoryDto {
  @IsNotEmpty()
  @IsString()
  person: string

  @IsNotEmpty()
  @IsString()
  act: string

  @IsOptional()
  @IsString()
  task_name?: string

  @IsOptional()
  @IsString()
  task_rename?: string

  @IsOptional()
  @IsString()
  act_from?: string

  @IsOptional()
  @IsString()
  act_to?: string

  @IsOptional()
  @IsString()
  transfer_date?: string

  @IsOptional()
  task?: Task
}
