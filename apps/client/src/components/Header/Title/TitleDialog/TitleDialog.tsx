import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {useDeleteBoardMutation, useUpdateBoardMutation} from "../../../../services/board.ts";
import {useAppSelector} from "../../../../hooks/hooks.ts";

interface IProps {
  open: boolean
  boardTitle: string
  handleClose: () => void
  id: string
}

const TitleDialog = ({open, boardTitle, id, handleClose}: IProps) => {
  const [edit, setEdit] = useState(false)
  const [Title, setTitle] = useState(boardTitle)

  const [updateTitle] = useUpdateBoardMutation()
  const [deleteBoard] =useDeleteBoardMutation()
  const boardId = useAppSelector(state => state.board.currentBoard?.id)

  useEffect(() => {
    setEdit(false)
    setTitle(boardTitle)
  }, [open]);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (e.currentTarget.ariaLabel === 'save') {
      setEdit(!edit)
      if (boardId && Title) {
        updateTitle({
          id: boardId,
          name: Title
        })
        setTitle(Title)
      }
    }
    if (!edit) {
      setTitle(boardTitle)
    }

    setEdit(!edit)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(e.currentTarget.ariaLabel === 'delete'){
      deleteBoard(id)
    }
    handleEdit(e)
    handleClose()
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          {boardTitle}
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} alignItems={"center"}>
            {edit ?
              <Stack
                component="form"
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing={1}
              >
                <TextField
                  id="standard-basic"
                  label="New title"
                  variant='filled'
                  value={Title}
                  onChange={handleChange}
                  autoFocus
                />
                <Button aria-label={'save'} onClick={handleEdit} variant={"contained"} type={"submit"}>Save</Button>
                <Button aria-label={'cancel'} onClick={handleEdit}>Cancel</Button>
              </Stack>
              : <Button aria-label={'edit'} onClick={handleEdit} sx={{height:56}}>Edit title</Button>
            }
            <Button aria-label={'delete'} onClick={handelClick} color={"error"} variant={"outlined"}>Delete</Button>
          </Stack>

        </DialogContent>
        <DialogActions>
          <Button
            aria-label={'close'}
            onClick={handelClick}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TitleDialog;