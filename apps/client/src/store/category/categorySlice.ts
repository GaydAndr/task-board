import {createSlice} from "@reduxjs/toolkit";
import {categoryCreateDefault, categoryCreateNew, categoryGetAll, deleteCategory} from "./categoryOperation.ts";
import {ICategory} from "../../types/types.ts";

// type RequestState = 'pending' | 'fulfilled' | 'rejected'

interface IStoreCategory {
  categoryList: ICategory[]
  currentCategory: string
}

const initialState: IStoreCategory = {
  categoryList: [],
  currentCategory: ''
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, {payload}) => {
      state.categoryList = payload
    },
    setCurrentCategory: (state, {payload}) => {
      state.currentCategory = payload
    },
    removeCurrentCategory: (state) => {
      state.currentCategory = ''
    },

  },
  extraReducers: (builder) => {
    builder.addCase(categoryGetAll.fulfilled, (
      state,
      action
    ) => {
      state.categoryList = action.payload
    })
    builder.addCase(categoryCreateDefault.fulfilled, (state, action) => {
      state.categoryList = action.payload
    })
    builder.addCase(categoryCreateNew.fulfilled, (state, action) => {
      state.categoryList.push(action.payload)
    })
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.categoryList = state.categoryList.filter(
        element => element.id !== action.payload
      )
    })
  }
})

export const categoryAction = categorySlice.actions

export default categorySlice