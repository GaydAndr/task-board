import {Button, Dialog, DialogTitle} from "@mui/material";
import {useState} from "react";
import BoardsList from "../../BoardsList/BoardsList.tsx";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {boardGetAll} from "../../../store/board/boardOperation.ts";

const BoardSelector = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    dispatch(boardGetAll())
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ml:2}}>
        Select Board
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Chose board</DialogTitle>
        <BoardsList onCloseDrawer={handleClose}/>
      </Dialog>
    </>
  );
};

export default BoardSelector;