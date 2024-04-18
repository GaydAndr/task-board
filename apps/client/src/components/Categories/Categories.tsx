import CategoryHeader from "./CategoryHeader/CategoryHeader.tsx";
import TaskAddNew from "../Task/TaskAddNew/TaskAddNew.tsx";
import {Stack} from "@mui/material";
import {useAppSelector} from "../../hooks/hooks.ts";
import TaskForm from "../Task/TaskForm/TaskForm.tsx";
import TaskCard from "../Task/TaskCard.tsx";

interface Prop {
  id: string
  name: string
  amount: number
}

const Categories = (prop: Prop) => {
  const boardTask = useAppSelector(
    state => state.task.taskList
  )

  return (
    <>
      <TaskForm/>
      <CategoryHeader {...prop}/>
      <TaskAddNew name={prop.name}/>
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

export default Categories;