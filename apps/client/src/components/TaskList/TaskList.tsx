import TaskListHeader from "./TaskListHeader/TaskListHeader.tsx";
import TaskListBtn from "./TaskListBtn/TaskListBtn.tsx";
import {Stack} from "@mui/material";
import TaskCard from "./TaskCard/TaskCard.tsx";
import CardForm from "../CardForm/CardForm.tsx";

const TaskList = () => {
  return (
    <>
      <CardForm/>

      <TaskListHeader/>
      <TaskListBtn/>
      <Stack
        maxHeight={'70vh'}
        overflow={"auto"}
        spacing={2}
        pl={1}
        pr={2}

      >
        <TaskCard/>
        <TaskCard/>

      </Stack>
    </>
  );
};

export default TaskList;