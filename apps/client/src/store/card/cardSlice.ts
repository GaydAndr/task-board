import {createSlice} from "@reduxjs/toolkit";
import { taskCreateNew, taskGetAll, deleteTask} from "./cardOperation.ts";
import {ITask} from "../../types/types.ts";

interface IStoreTask {
  taskList: ITask[] |[]
  currentTask: ITask | null
}

const initialState: IStoreTask = {
  taskList: [],
  currentTask: null
}

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTask: (state, {payload}) => {
      state.taskList = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(taskGetAll.fulfilled, (state, action) => {
      state.taskList = action.payload
    })

    builder.addCase(taskCreateNew.fulfilled, (state, action) => {
      if(!state.taskList){
        state.taskList=[action.payload]
        return
      }
      state.taskList.push(action.payload)
    })
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      state.taskList = state.taskList.filter(
        element => element.id !== action.payload
      )
    })
  }
})

export const taskAction = taskSlice.actions

export default taskSlice
