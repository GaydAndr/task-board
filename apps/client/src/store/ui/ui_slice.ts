import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUIState {
  menuDrawer: boolean
  historyDrawer: boolean
  cardForm: boolean
}
//
// interface IPayload {
//   type: 'menuDrawer | historyDrawer | cardForm'
//   drawerState: boolean
// }

const initialState: IUIState = {
  menuDrawer: false,
  historyDrawer: false,
  cardForm: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleHistory: (state, {payload}: PayloadAction<boolean>) => {
      state.historyDrawer = payload
    },
    toggleCardForm: (state, {payload}: PayloadAction<boolean>) => {
      state.cardForm = payload
    },
    toggleMenu: (state, {payload}: PayloadAction<boolean>) => {
      state.menuDrawer = payload
    },

  }
})

export const uiAction = uiSlice.actions

export default uiSlice