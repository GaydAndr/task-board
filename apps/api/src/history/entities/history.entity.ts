import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Board} from "../../board/entities/board.entity";
import {Task} from "../../tasks/entities/task.entity";

@Entity()
export class History {
  @PrimaryGeneratedColumn('uuid',{name: 'history_id'})
  id: string

  @ManyToOne(
    () => Board,
    (board) => board.history
  )
  @JoinColumn({name: 'board_id'})
  board: Board

  @ManyToOne(
    () => Task,
    (task) => task.history
  )
  @JoinColumn({name: 'task_id'})
  task: Task

  @Column()
  person: string

  @Column()
  act: string

  @Column()
  task_name: string

  @Column({nullable: true})
  task_rename: string

  @Column()
  act_from: string

  @Column({nullable: true})
  act_to: string

  @CreateDateColumn()
  transfer_date: Date
}

