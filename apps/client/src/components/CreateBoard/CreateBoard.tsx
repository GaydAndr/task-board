import AddIcon from "@mui/icons-material/Add";
import {Button, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {postBoard} from "../../store/board/boardOperation.ts";
import {categoryCreateDefault} from "../../store/category/categoryOperation.ts";
import { v4 as uuidv4 } from 'uuid';

const CreateBoard = () => {
  const dispatch = useAppDispatch()
  const [active, setActive] = useState(false)
  const [boardTitle, setBoardTitle] = useState('');

  const handleCreateClick = () => {
    const boardId = uuidv4();
    if (active) {
      dispatch(postBoard({boardTitle, boardId}))
      dispatch(categoryCreateDefault({"board": boardId}))
    }
    setActive(!active);
  };
  return (
    <>
      {active ?
        <Stack
          direction={"row"}
          component="form"
          spacing={1}
          sx={{
            '& > :not(style)': {width: '15ch'},
          }}

          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="Controlled"
            value={boardTitle}
            size="small"


            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setBoardTitle(event.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={handleCreateClick}
            size="small"
          >
            Create
          </Button>
        </Stack>
        :
        <Button
          variant="outlined"
          startIcon={<AddIcon/>}
          onClick={handleCreateClick}
        >
          Create new list
        </Button>
      }
    </>
  );
};

export default CreateBoard;