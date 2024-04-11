import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/axios.api.ts";
import {ICategory} from "../../types/category.types.ts";
import {IBoard} from "../../types/board.types.ts";


export const categoryGetAll =
  createAsyncThunk<ICategory[] | null, string>(
    'sub-list/all',
    async (boardId: string) => {
      const {data} = await instance.get<ICategory[]>(
        `sub-list/all/${boardId}`
      )
      return data
    }
  )

export const categoryCreateDefault =
  createAsyncThunk<ICategory[] | null, object>(
    'sub-list/createDefault',
    async (board: IBoard) => {
      const {data} = await instance.post<ICategory[]>(
        `sub-list/createDefault`,
        board
      )
      return data
    }
  )

export const categoryCreateNew = createAsyncThunk<
  ICategory,
  { id: string, name: string }
>(
  'sub-list',
  async ({id, name}) => {
    try {
      const {data} = await instance.post<ICategory>(
        `sub-list`,
        {
          name,
          board: {
            id
          }
        })
      return data
    } catch (error: any) {
      console.error(error)
    }
  }
)

export const deleteCategory = createAsyncThunk<string, string>(
  'sub-list:id',
  async (caategoryId: string) => {
    try {
      const {data} = await instance.delete(`sub-list/${caategoryId}`)
      return data
    } catch (error: any) {
      console.error(error)
    }
  }
)