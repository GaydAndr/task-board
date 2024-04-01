import {Button, Stack} from "@mui/material";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import CreateBoard from "../../CreateBoard/CreateBoard.tsx";

const BoardBtn = () => {
  const dispatch = useAppDispatch()
  const handlerHistoryBtn =()=>{
    dispatch(uiAction.toggleHistory(true))
  }
  return (
    <Stack spacing={2} direction="row">
      <CreateBoard/>
      <Button variant="contained" onClick={handlerHistoryBtn}>History</Button>
    </Stack>
  );
};

export default BoardBtn;