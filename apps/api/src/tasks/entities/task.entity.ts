import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entities/board.entity";
import {History} from "../../history/entities/history.entity";
import {SubList} from "../../sub_list/entities/sub_list.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', {name: 'task_id'})
  id: string

  @ManyToOne(
    () => Board,
    (board) => board.tasks_list,
    {onDelete: "CASCADE"}
  )
  @JoinColumn({name: 'board_id'})
  board: Board

  @ManyToOne(
    ()=>SubList,
    (subList) => subList.task,
    {onDelete: "CASCADE"}
  )
  @JoinColumn({name: 'sub_list_id'})
  sub_list: SubList

  @OneToMany(
    () => History,
    (history) => history.board,
  )
  history: History[]

  @Column()
  name: string

  @Column()
  status: string

  @Column()
  due_date: string

  @Column()
  priority: string

  @Column()
  description: string

  @CreateDateColumn()
  transfer_date: Date
}
