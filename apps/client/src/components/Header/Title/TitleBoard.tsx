import {FC, useState} from "react";
import {
  Typography
} from "@mui/material";
import {useAppSelector} from "../../../hooks/hooks.ts";
import TitleDialog from "./TitleDialog/TitleDialog.tsx";

const TitleBoard: FC = () => {
  const boardTitle = useAppSelector(
    state => state.board.currentBoard?.name
  )
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Typography
        variant="h4"
        maxWidth={'140px'}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: 'pointer'
      }}
        onClick={handleClickOpen}
      >
        {boardTitle}
      </Typography>
      <TitleDialog open={open} boardTitle={boardTitle} handleClose={handleClose}/>
    </>
  );
};

export default TitleBoard;