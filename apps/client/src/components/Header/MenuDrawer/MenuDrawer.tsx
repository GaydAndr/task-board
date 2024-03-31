import {Button, Drawer} from "@mui/material";
import HistoryList from "../../History/HistoriList/HistoryList.tsx";
import {useState} from "react";

const MenuDrawer = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer =
    ( newOpen: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        setOpen(newOpen);
      };
  return (
    <>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} anchor={"right"} onClose={toggleDrawer(false)}>
        <HistoryList/>
      </Drawer>
    </>
  );
};

export default MenuDrawer;