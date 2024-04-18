import AddIcon from "@mui/icons-material/Add";
import {Button} from "@mui/material";
import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {usePostBoardMutation} from "../../../services/board.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {useCreateDefCategoriesMutation} from "../../../services/category.ts";
import EditForm from "../../common/EditForm/EditForm.tsx";
import {boardTooltipText} from "../../../types/board.types.ts";

const CreateBoard = () => {
  const dispatch= useAppDispatch();
  const navState=useAppSelector(state => state.ui.menuDrawer)

  const [postBoard] = usePostBoardMutation()
  const [createDefCategory]=useCreateDefCategoriesMutation()

  const [active, setActive] = useState(false)
  const [boardTitle, setBoardTitle] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const boardId = uuidv4();
    // if (!boardTitle) {
    //   setActive(!active);
    //   return
    // }
    if (active && e.currentTarget.ariaLabel === 'addBoard') {
      postBoard({id: boardId, name: boardTitle})
      createDefCategory(boardId)
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
        <EditForm
          inputText={boardTitle}
          tooltipText={boardTooltipText}
          handleClick={handleClick}
          setInputTex={setBoardTitle}
          addLabel={'addBoard'}
          />
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