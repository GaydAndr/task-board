import {List, ListItemButton, ListItemText} from "@mui/material";
import { useAppSelector} from "../../hooks/hooks.ts";
// import {getBoard} from "../../store/board/boardOperation.ts";
// import {categoryGetAll} from "../../store/category/categoryOperation.ts";
import {useLazyGetOneBoardQuery} from "../../services/board.ts";


export interface SimpleDialogProps {
  onCloseDrawer?: () => void;
}

const BoardsList = (props: SimpleDialogProps) => {
  const [getOneBoard] = useLazyGetOneBoardQuery()
  const {onCloseDrawer} = props;
  // const dispatch = useAppDispatch()
  const boardsList = useAppSelector(
    state => state.board.boardsList
  )

  const handleListItemClick = (id: string) => {
    getOneBoard(id)
    // dispatch(getBoard(id))
    // dispatch(categoryGetAll(id))
    if (onCloseDrawer) onCloseDrawer();
  };

  return (
    <>
      <List component="nav" aria-label="secondary mailbox folder">
        {boardsList?.map((board) => (
          <ListItemButton
            key={board.id}
            onClick={() => handleListItemClick(board.id)}
          >
            <ListItemText secondary={board.name}/>
          </ListItemButton>
        ))}

      </List>
    </>
  );
};

export default BoardsList;