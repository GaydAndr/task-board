import {createSlice} from "@reduxjs/toolkit";
import {IStoreBoard} from "../../types/types.ts";
import {boardGetAll, getBoard, postBoard} from "./boardOperation.ts";

// type RequestState = 'pending' | 'fulfilled' | 'rejected'


const initialState: IStoreBoard = {
  currentBoard: null,
  boardsList: null,
}

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(boardGetAll.fulfilled, (
      state,
      action
    ) => {
      state.boardsList = action.payload
    })
    builder.addCase(getBoard.fulfilled, (state, action) => {
      state.currentBoard = action.payload
    })
    builder.addCase(postBoard.fulfilled, (state, action) => {
      console.log(action.payload)
      state.currentBoard = action.payload
    })
  }
})

export const boardAction = boardSlice.actions

export default boardSlice