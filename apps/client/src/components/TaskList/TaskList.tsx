import TaskListHeader from "./TaskListHeader/TaskListHeader.tsx";
import TaskListBtn from "./TaskListBtn/TaskListBtn.tsx";
import {Stack} from "@mui/material";
import CardForm from "../CardForm/CardForm.tsx";
import {useState} from "react";
import {useAppSelector} from "../../hooks/hooks.ts";
import TaskCard from "./TaskCard/TaskCard.tsx";

interface Prop {
  id:string
  name: string
  amount:number
}
const TaskList = (prop: Prop) => {
  const [initialName] = useState(prop.name);
  const boardTask=useAppSelector(
    state => state.task.taskList
  )

  return (
    <>
      <CardForm name={initialName} />
      <TaskListHeader {...prop}/>
      <TaskListBtn/>
      <Stack
        maxHeight={'70vh'}
        overflow={"auto"}
        spacing={2}
        pl={1}
        pr={2}
      >
        {boardTask?.map(task=>(
          <TaskCard key={task.id} dataTask={task}/>
        ))}
        {/*<TaskCard/>*/}
        {/*<TaskCard/>*/}
      </Stack>
    </>
  );
};

export default TaskList;