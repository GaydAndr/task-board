import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/axios.api.ts";
import {ITask, ITaskPost, ITaskResponse} from "../../types/types.ts";

export const taskGetAll =
  createAsyncThunk<ITask[] | null, string>(
    'tasks/all',
    async (boardId: string) => {
      const {data} = await instance.get<ITask[]>(
        `task/all/${boardId}`
      )
      return data
    }
  )

export const taskCreateNew = createAsyncThunk<
  ITaskResponse,
  ITaskPost
>(
  'tasks',
  async (taskData: ITaskPost) => {
    try {
      const {data} = await instance.post<ITaskResponse>(
        `tasks`,
        taskData
      )
      return data
    } catch (error: any) {
      console.error(error)
    }
  }
)

export const deleteTask = createAsyncThunk<string, string>(
  'tasks:id',
  async (taskId: string) => {
    try {
      const {data} = await instance.delete(`task-list/${taskId}`)
      return data
    } catch (error: any) {
      console.error(error)
    }
  }
)
