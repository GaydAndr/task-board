import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entities/board.entity";

@Entity()
export class SubList {
  @PrimaryGeneratedColumn('uuid', {name: 'sub_list'})
  id: string

  @Column()
  name: string

  @ManyToOne(
    () => Board,
    (board) => board.sud_list,
    {onDelete: "CASCADE"}
  )
  @JoinColumn({name: 'board_id'})
  board: Board
}
