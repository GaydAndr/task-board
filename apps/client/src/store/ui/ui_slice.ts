import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUIState {
  historyDrawer: boolean
  cardForm:boolean
}

const initialState: IUIState = {
  historyDrawer: false,
  cardForm:false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleHistory: (state,{payload}:PayloadAction<boolean>) => {
      state.historyDrawer = payload
    },
    toggleCardForm: (state,{payload}:PayloadAction<boolean>) => {
      state.cardForm = payload
    },

  }
})

export const uiAction = uiSlice.actions

export default uiSlice