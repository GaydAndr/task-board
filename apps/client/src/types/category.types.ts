import {IBoard} from "./board.types.ts";

export interface ICategory {
  id: string;
  name: string;
  board: IBoard
}