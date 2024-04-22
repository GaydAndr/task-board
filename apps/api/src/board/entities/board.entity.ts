import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from "typeorm";
import {History} from "../../history/entities/history.entity";
import {Task} from "../../tasks/entities/task.entity";
import {SubList} from "../../sub_list/entities/sub_list.entity";

@Entity()
export class Board {
  // @PrimaryGeneratedColumn('uuid',{name:'board_id'})
  @Column()
  @PrimaryColumn({name:'board_id'})
  id: string

  @Column()
  name: string

  @OneToMany(
    () => History,
    history => history.board,
    {onDelete: "CASCADE"}
  )
  history: History[]

  @OneToMany(
    () => Task,
    (task) => task.board,
    {onDelete: "CASCADE"}
  )
  tasks_list: Task[]

  @OneToMany(
    () => SubList,
    (sub_list)=>sub_list.board,
    {onDelete: "CASCADE", nullable: true},
  )
  sub_list: SubList[]

  @CreateDateColumn()
  createdAt: Date
}
