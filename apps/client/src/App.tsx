import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/hooks.ts";
import BoardsList from "./components/BoardsList/BoardsList.tsx";
import CreateBoard from "./components/CreateBoard/CreateBoard.tsx";
// import {categoryAction} from "./store/category/categorySlice.ts";
// import {taskAction} from "./store/card/cardSlice.ts";
import {useLazyGetAllBoardsQuery} from "./services/board.ts";
import {Box} from "@mui/material";
import {boardAction} from "./store/board/boardSlice.ts";

function App() {
  const [getAllBoards] = useLazyGetAllBoardsQuery()
  const dispatch = useAppDispatch()

  const {currentBoard, boardsList} = useAppSelector(
    state => state.board
  )

  useEffect(() => {
    if (!currentBoard && !boardsList) {
      getAllBoards()
    }
    if (!currentBoard && boardsList) {
      dispatch(boardAction.setBoard(boardsList[0]))
    }
    // setBoartData()
  }, [boardsList])

  // const setBoartData = () => {
  //   dispatch(categoryAction.setCategory(currentBoard?.sud_list))
  //   dispatch(taskAction.setTask(currentBoard?.tasks_list))
  // }

  return (
    <>
      {/*<CreateBoard/>*/}
      {!boardsList && <CreateBoard/>}
      {boardsList && !currentBoard &&
        <Box maxHeight={'80vh'} overflow={"auto"}>
          <CreateBoard/>
          <BoardsList/>
        </Box>
      }
      {!boardsList || currentBoard && <Layout/>}
    </>
  )
}

export default App
