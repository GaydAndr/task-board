import AddIcon from "@mui/icons-material/Add";
import {Button,  Stack, TextField} from "@mui/material";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {usePostBoardMutation} from "../../services/board.ts";
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateIconBtn from "./CreateIconBtn/CreateIconBtn.tsx";

const CreateBoard = () => {
  const [post] = usePostBoardMutation()
  const [active, setActive] = useState(false)
  const [boardTitle, setBoardTitle] = useState('');

  const handleClick = () => {
    const boardId = uuidv4();
    if (!boardTitle) {
      setActive(!active);
      return
    }
    if (active) {
      post({id: boardId, name: boardTitle})
      setBoardTitle('')
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
          width={'250px'}
          noValidate
          autoComplete="off"
          alignItems={"center"}
        >
          <TextField
            id="outlined-controlled"
            label="Board name"
            value={boardTitle}
            size="small"
            autoFocus
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setBoardTitle(event.target.value);
            }}
          />
          <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={1}
          >
            <CreateIconBtn
              ariaLabel={'add'}
              iconColor={'success'}
              disabled={!boardTitle}
              handleOnClick={handleClick}
              children={ <AddCircleIcon fontSize="large"/>}
            />
            <CreateIconBtn
              ariaLabel={'cancel'}
              iconColor={'error'}
              handleOnClick={handleClick}
              children={<CancelIcon/>}
              />
          </Stack>

        </Stack>
        :
        <Button
          aria-label={'createList'}
          variant="outlined"
          startIcon={<AddIcon/>}
          onClick={handleClick}
        >
          Create new list
        </Button>
      }
    </>
  );
};

export default CreateBoard;