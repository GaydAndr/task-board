import './App.css'
import Layout from "./components/Layout/Layout.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "./hooks/hooks.ts";
import {boardGetAll} from "./store/board/boardOperation.ts";
import BoardsList from "./components/BoardsList/BoardsList.tsx";
import CreateBoard from "./components/CreateBoard/CreateBoard.tsx";
import {categoryCreateDefault, categoryGetAll} from "./store/category/categoryOperation.ts";
import {categoryAction} from "./store/category/categorySlice.ts";
import {taskAction} from "./store/card/cardSlice.ts";

function App() {
  const dispatch = useAppDispatch()
  const boardsList = useAppSelector(
    state => state.board.boardsList
  )
  const currentBoard = useAppSelector(
    state => state.board.currentBoard
  )
  const categoryList = useAppSelector(
    state => state.category.categoryList
  )

  useEffect(() => {
    if (!currentBoard) {
      dispatch(boardGetAll())
    }
    setBoartData()
  }, [])
  useEffect(() => {
    if (currentBoard?.sud_list?.length === 0) {
      dispatch(categoryGetAll(currentBoard.id))
      if (!categoryList?.length) {
        dispatch(categoryCreateDefault({"board": currentBoard}))
      }
    }
    dispatch(taskAction.setTask(currentBoard?.tasks_list))

  }, [currentBoard]);

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
