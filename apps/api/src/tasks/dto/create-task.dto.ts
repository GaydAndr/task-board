import { IsNotEmpty, IsOptional, IsString, MinLength} from "class-validator";
import {Board} from "../../board/entities/board.entity";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  // @MinLength(3,{message:'Category name must have more then 3 symbols'})
  name: string

  @IsString()
  status: string

  @IsString()
  due_date: string

  @IsString()
  priority: string

  @IsOptional()
  @IsString()
  description?: string

  @IsNotEmpty()
  board: Board
}
