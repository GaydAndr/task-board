import TaskListHeader from "./TaskListHeader/TaskListHeader.tsx";
import AddCategoryBtn from "./TaskListBtn/AddCategoryBtn.tsx";
import {Stack} from "@mui/material";
import CardForm from "../CardForm/CardForm.tsx";
import {useAppSelector} from "../../hooks/hooks.ts";
import TaskCard from "./TaskCard/TaskCard.tsx";

interface Prop {
  id: string
  name: string
  amount: number
}

const TaskList = (prop: Prop) => {
  const boardTask = useAppSelector(
    state => state.task.taskList
  )

  return (
    <>
      <CardForm/>
      <TaskListHeader {...prop}/>
      <AddCategoryBtn name={prop.name}/>
      <Stack
        maxHeight={'70vh'}
        overflow={"auto"}
        spacing={2}
        pl={1}
        pr={2}
      >
        {boardTask?.filter(task => task.status === prop.name).map(task => (

          <TaskCard key={task.id} dataTask={task}/>
        ))}
      </Stack>
    </>
  );
};

export default TaskList;