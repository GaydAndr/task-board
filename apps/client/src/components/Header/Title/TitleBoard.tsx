import {FC} from "react";
import {Typography} from "@mui/material";
import {useAppSelector} from "../../../hooks/hooks.ts";

const TitleBoard: FC = () => {
  const boardTitle = useAppSelector(
    state => state.board.currentBoard?.name
  )
  return (
    <>
      <Typography variant="h4">
        {boardTitle}
      </Typography>
    </>
  );
};

export default TitleBoard;