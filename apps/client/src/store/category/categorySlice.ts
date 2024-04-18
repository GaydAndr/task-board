import {createSlice} from "@reduxjs/toolkit";
import {categoryApi} from "../../services/category.ts";
import {ICategory} from "../../types/category.types.ts";

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
    setCategories: (state, {payload}) => {
      state.categoryList = payload
    },
    setCurrentCategory: (state, {payload}) => {
      console.log(12)
      state.currentCategory = payload
    },
    removeCurrentCategory: (state) => {
      state.currentCategory = ''
    },

  },
  extraReducers: (builder) => {
    builder.addMatcher(
      categoryApi.endpoints.getAllCategories.matchFulfilled,(state, {payload}) => {
        state.categoryList = payload
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.createDefCategories.matchFulfilled, (state, {payload}) => {
        state.categoryList = payload
      }
    )
  }
})

export const categoryAction = categorySlice.actions

export default categorySlice