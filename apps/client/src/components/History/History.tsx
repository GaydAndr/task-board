import {Drawer} from "@mui/material";
import HistoryList from "./HistoriList/HistoryList.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {uiAction} from "../../store/ui/ui_slice.ts";

const History = () => {
  const dispatch = useAppDispatch()
  const historyDrawer = useAppSelector((state) => state.ui.historyDrawer)
  const toggleDrawer =
    () =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
        dispatch(uiAction.toggleHistory(false))
      };
  return (
    <>
      <Drawer open={historyDrawer} anchor={"right"} onClose={toggleDrawer()}>
        <HistoryList/>
      </Drawer>
    </>
  );
};

export default History;