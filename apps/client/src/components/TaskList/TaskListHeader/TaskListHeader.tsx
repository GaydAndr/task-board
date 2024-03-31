import {Stack, Typography} from "@mui/material";
import TaskListMenu from "../TaskListMenu/TaskListMenu.tsx";

const TaskListHeader = () => {
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
        NameList
      </Typography>
      <Typography variant="h5">
        99
      </Typography>
      <TaskListMenu/>
    </Stack>
  );
};

export default TaskListHeader;