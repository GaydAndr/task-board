import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import CardField from "./CardField/CardField.tsx";
import CardDatePicker from "./CardDatePicker/CardDatePicker.tsx";
import CardDescription from "./CardDescription/CardDescription.tsx";
import CardPriority from "./CardPriority/CardPriority.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";
import {useState} from "react";
import {taskCreateNew} from "../../store/card/cardOperation.ts";

const CardForm = ({name: initialName}: { name: string }) => {
  const [name] = useState(initialName);
  const dispatch = useAppDispatch()
  const cardFormState = useAppSelector(state => state.ui.cardForm)
  const currentBoard = useAppSelector(
    state => state.board.currentBoard
  )
  const handleClose = () => {
    dispatch(uiAction.toggleCardForm(false))
  };
  return (
    <>
      <Dialog
        id={name}
        open={cardFormState}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(name)
            console.log({
              ...formJson,
              "status": name,
              board: currentBoard
            });
            dispatch(taskCreateNew({
              ...formJson,
              "task_name": formJson.taskName,
              "status": name,
              "due_date": formJson.dueDate,
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