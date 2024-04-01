import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import CardField from "./CardField/CardField.tsx";
import CardDatePicker from "./CardDatePicker/CardDatePicker.tsx";
import CardDescription from "./CardDescription/CardDescription.tsx";
import CardPriority from "./CardPriority/CardPriority.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";
import {taskCreateNew} from "../../store/card/cardOperation.ts";
import {categoryAction} from "../../store/category/categorySlice.ts";

const CardForm = () => {
  const dispatch = useAppDispatch()
  const cardFormState = useAppSelector(state => state.ui.cardForm)
  const currentBoard = useAppSelector(
    state => state.board.currentBoard
  )
  const currentCategory=useAppSelector(
    state => state.category.currentCategory
  )
  const handleClose = () => {
    dispatch(uiAction.toggleCardForm(false))
    dispatch((categoryAction.removeCurrentCategory()))
  };
  return (
    <>
      <Dialog
        open={cardFormState}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            dispatch(taskCreateNew({
              "task_name": formJson.taskName,
              "status": currentCategory,
              "due_date": formJson.due_date,
              "priority": formJson.priority,
              "description": formJson.description,
              "board": currentBoard
            }))
            handleClose();
          },
        }}
      >
        <DialogTitle>Create Task</DialogTitle>
        <DialogContent>
          <CardField label='Task name' type={'text'} name={'taskName'}/>
          <CardDatePicker name='due_date'/>
          <CardDescription name='description'/>
          <CardPriority name='priority'/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardForm;