import AddIcon from "@mui/icons-material/Add";
import {Button,  Stack, TextField} from "@mui/material";
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateIconBtn from "./CreateIconBtn/CreateIconBtn.tsx";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {usePostBoardMutation} from "../../../services/board.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";

const CreateBoard = () => {
  const dispatch= useAppDispatch();
  const navState=useAppSelector(state => state.ui.menuDrawer)
  const [postBoard] = usePostBoardMutation()
  const [active, setActive] = useState(false)
  const [boardTitle, setBoardTitle] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const boardId = uuidv4();
    if (!boardTitle) {
      setActive(!active);
      return
    }
    if (active && e.currentTarget.ariaLabel === 'addBoard') {
      postBoard({id: boardId, name: boardTitle})
      setBoardTitle('')
    }
    if(active && navState){
      dispatch(uiAction.toggleMenu(false))
    }
    setActive(!active);
    setBoardTitle('')
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
              ariaLabel={'addBoard'}
              iconColor={'success'}
              disabled={!boardTitle}
              type={'submit'}
              handleOnClick={handleClick}
              children={ <AddCircleIcon fontSize="large"/>}
            />
            <CreateIconBtn
              ariaLabel={'cancel'}
              iconColor={'error'}
              type={'button'}
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