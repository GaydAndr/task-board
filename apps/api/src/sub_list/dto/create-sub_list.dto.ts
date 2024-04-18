import {IsNotEmpty, IsOptional, MinLength} from "class-validator";
import {Board} from "../../board/entities/board.entity";

export class CreateSubListDto {
  @IsNotEmpty()
  @MinLength(3, {message: 'Category name must have more then 3 symbols'})
  name: string

  @IsOptional()
  board: Board
}
