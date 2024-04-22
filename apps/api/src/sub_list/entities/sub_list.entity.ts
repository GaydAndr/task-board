import {Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entities/board.entity";
import {Task} from "../../tasks/entities/task.entity";

@Entity()
export class SubList {
  @PrimaryGeneratedColumn('uuid', {name: 'sub_list_id'})
  id: string

  @Column()
  name: string

  @Column()
  @Generated("increment")
  order: number

  @ManyToOne(
    () => Board,
    (board) => board.sub_list,
    {onDelete: "CASCADE"}
  )
  @JoinColumn({name: 'board_id'})
  board: Board

  @OneToMany(
    ()=> Task,
    (task)=>task.sub_list,
    {onDelete:'CASCADE', eager: true}
  )
  @JoinColumn({name: 'task_id'})
  task: Task
}
