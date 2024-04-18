import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import TaskField from "./TaskField/TaskField.tsx";
import TaskDatePicker from "./TaskDatePicker/TaskDatePicker.tsx";
import TaskDescription from "./TaskDescription/TaskDescription.tsx";
import TaskPriority from "./TaskPriority/TaskPriority.tsx";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks.ts";
import {uiAction} from "../../../store/ui/ui_slice.ts";
import {categoryAction} from "../../../store/category/categorySlice.ts";
import {taskCreateNew} from "../../../store/card/cardOperation.ts";

const TaskForm = () => {
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
          <TaskField label='Task name' type={'text'} name={'taskName'}/>
          <TaskDatePicker name='due_date'/>
          <TaskDescription name='description'/>
          <TaskPriority name='priority'/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskForm;