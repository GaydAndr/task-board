import {Button, Stack} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";

const BoardBtn = () => {
  const dispatch = useAppDispatch()
  const handlerHistoryBtn =()=>{
    dispatch(uiAction.toggleHistory(true))
  }
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        startIcon={<AddIcon/>}
      >
          Create new list
      </Button>
      <Button variant="contained" onClick={handlerHistoryBtn}>History</Button>
    </Stack>
  );
};

export default BoardBtn;