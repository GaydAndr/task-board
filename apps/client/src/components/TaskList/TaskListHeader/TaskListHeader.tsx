import {Stack, Typography} from "@mui/material";
import TaskListMenu from "../TaskListMenu/TaskListMenu.tsx";

interface Prop {
  name: string
  amount: number
  id: string
}

const TaskListHeader = ({id, name, amount}: Prop) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      border={2}
      borderColor={"lightgrey"}
      borderLeft={0}
      borderRight={0}
      alignItems={"center"}
    >
      <Typography variant="h5" flexGrow={1} textAlign={"left"}>
        {name}
      </Typography>
      <Typography variant="h5">
        {amount}
      </Typography>
      <TaskListMenu id={id}/>
    </Stack>
  );
};

export default TaskListHeader;