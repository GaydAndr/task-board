import {Button} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";

const TaskListBtn = () => {
  const dispatch = useAppDispatch()
  const handlerAddCardBtn =()=>{
    dispatch(uiAction.toggleCardForm(true))
  }
  return (
    <>
      <Button
        variant="outlined"
        disableElevation
        size="large"
        fullWidth
        sx={{
          color: "#232323",
          mt:2,
          mb:2,
          borderStyle: 'dashed'
        }}
        startIcon={ <AddIcon/>}
        onClick={handlerAddCardBtn}
      >
        Add new card
      </Button>
    </>
  );
};

export default TaskListBtn;