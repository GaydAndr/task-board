import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/hooks.ts";
import BoardsList from "./components/BoardsList/BoardsList.tsx";
import CreateBoard from "./components/CreateBoard/CreateBoard.tsx";
import {categoryAction} from "./store/category/categorySlice.ts";
import {taskAction} from "./store/card/cardSlice.ts";
import {useLazyGetAllBoardsQuery} from "./services/board.ts";

function App() {
  const [getAllBoards]=useLazyGetAllBoardsQuery()
  const dispatch = useAppDispatch()
  const {boardsList}=useAppSelector(state => state.board)

  const currentBoard = useAppSelector(
    state => state.board.currentBoard
  )

  useEffect(() => {
    if (!currentBoard) {
      getAllBoards()
    }
    setBoartData()
  }, [])

  // useEffect(() => {
  //   if (currentBoard?.sud_list?.length === 0) {
  //     dispatch(categoryGetAll(currentBoard.id))
  //     if (!categoryList?.length) {
  //       dispatch(categoryCreateDefault({"board": currentBoard}))
  //     }
  //   }
  //   dispatch(taskAction.setTask(currentBoard?.tasks_list))
  //
  // }, [currentBoard]);

  const setBoartData = () => {
    dispatch(categoryAction.setCategory(currentBoard?.sud_list))
    dispatch(taskAction.setTask(currentBoard?.tasks_list))
  }


  return (
    <>
      {/*<CreateBoard/>*/}
      {!boardsList && <CreateBoard/>}
      {boardsList && !currentBoard &&
        <>
          <BoardsList/>
          <CreateBoard/>
        </>
      }
      {!boardsList || currentBoard && <Layout/>}
    </>
  )
}

export default App
