import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import {useState} from "react";

interface IProps {
  open: boolean
  boardTitle: string | undefined
  handleClose: () => void
}

const TitleDialog = ({open, boardTitle, handleClose}: IProps) => {
  const [edit, setEdit] = useState(false)

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(e.currentTarget.ariaLabel === 'save'){
      setEdit(!edit)

    }
      setEdit(!edit)
  };

  const handelClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
          {edit ?
            <>
              <TextField id="standard-basic" label="New title" variant="standard"/>
              <Button aria-label={'save'} onClick={handleEdit}>Save</Button>
              <Button aria-label={'cancel'} onClick={handleEdit}>Cancel</Button>
            </>
            : <Button aria-label={'edit'} onClick={handleEdit}>Edit title</Button>
          }
        </DialogContent>
        <DialogActions>
          <Button aria-label={'close'} onClick={(e)=>handelClick(e) }>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TitleDialog;