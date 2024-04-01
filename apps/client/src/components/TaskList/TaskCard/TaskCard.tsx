import {Card, CardActionArea, CardActions, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import CardMenu from "./CardMenu/CardMenu.tsx";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CardMoveTo from "./CardMoveTo/CardMoveTo.tsx";
import {ITaskResponse} from "../../../types/types.ts";
import dayjs from 'dayjs';

interface Prop{
  dataTask:ITaskResponse
}
const TaskCard = ({dataTask}:Prop) => {
  return (
    <Card
      variant={"outlined"}
      sx={{
        height: 'auto',
        overflow: 'visible'
      }}
    >
      <CardHeader
        action={
          <CardMenu/>
        }
        title={dataTask.task_name}
        sx={{
          textAlign: 'left'
        }}
      />
      <CardActionArea>
        <CardContent
          sx={{
            maxHeight: 200,
            overflow: "auto",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"justify"}
          >
            {dataTask.description}
          </Typography>

        </CardContent>
        <CardContent
          sx={{
            textAlign: 'left'
          }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <CalendarMonthIcon color="action"/>
            <Typography
              variant="h6"
              color="text.secondary"
            >
              {dayjs(dataTask.due_date).format('DD/MM/YYYY')}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            bgcolor={'lightgrey'}
            sx={{
              display: 'inline-flex'
            }}
            pl={1}
            pr={1}
            // ml={-1}
            borderRadius={5}
          >
            <FiberManualRecordIcon fontSize={"small"}/>
            <Typography
              variant="h6"
              color="text.secondary"
            >
              {dataTask.priority}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <CardMoveTo/>
      </CardActions>
    </Card>
  );
};

export default TaskCard;