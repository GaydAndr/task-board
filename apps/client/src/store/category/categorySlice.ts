import {createSlice} from "@reduxjs/toolkit";
import {categoryApi} from "../../services/category.ts";
import {IStoreCategory} from "../../types/category.types.ts";

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
      categoryApi.endpoints.getAllCategories.matchFulfilled, (state, {payload}) => {
        state.categoryList = payload
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.createDefCategories.matchFulfilled, (state, {payload}) => {
        state.categoryList = payload
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.postCategory.matchFulfilled, (state, {payload}) => {
        state.categoryList.push(payload)
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.deleteCategory.matchFulfilled, (state, {payload}) => {
        state.categoryList = state.categoryList?.filter((category) => category.id !== payload.id)
        // if (payload.id === state.currentBoard?.id) {
        //   state.currentBoard = null
        // }
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.updateCategory.matchFulfilled, (state, {payload}) => {
        state.categoryList = state.categoryList.map(item =>
          item.id === payload.id ? {...item, name: payload.name} : item
        )
      }
    )
    builder.addMatcher(
      categoryApi.endpoints.swapOrder.matchFulfilled, (state, {payload}) => {
        console.log(payload)
        state.categoryList = payload
      }
    )
  }
})

export const categoryAction = categorySlice.actions

export default categorySlice