import {IsNotEmpty, MinLength} from "class-validator";

export class CreateBoardDto {
  @IsNotEmpty()
  @MinLength(3,{message:'Board name must have more then 3 symbols'})
  name: string

  @IsNotEmpty()
  id: string
}
