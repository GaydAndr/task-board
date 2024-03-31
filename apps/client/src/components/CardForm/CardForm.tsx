import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import CardField from "./CardField/CardField.tsx";
import CardDatePicker from "./CardDatePicker/CardDatePicker.tsx";
import CardDescription from "./CardDescription/CardDescription.tsx";
import CardPriority from "./CardPriority/CardPriority.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";

const CardForm = () => {
  const dispatch = useAppDispatch()
  const cardFormState=useAppSelector(state => state.ui.cardForm)

  const handleClose = () => {
    dispatch(uiAction.toggleCardForm(false))
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
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>

          <CardField label='Task name' type={'text'} name={'taskName'}/>
          <CardDatePicker/>
          <CardDescription/>
          <CardPriority/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardForm;