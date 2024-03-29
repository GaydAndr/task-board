import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entities/board.entity";
import {History} from "../../history/entities/history.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid', {name: 'task_id'})
  id: string

  @ManyToOne(() => Board, (board) => board.tasks_list)
  @JoinColumn({name: 'board_id'})
  board: Board

  @OneToMany(
    () => History,
    (history) => history.board,
  )
  history: History[]

  @Column()
  task_name: string

  @Column()
  status: string

  @Column()
  due_date: Date

  @Column()
  priority: string

  @Column()
  description: string

  @CreateDateColumn()
  transfer_date: Date
}
