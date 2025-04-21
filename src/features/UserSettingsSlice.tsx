
import type {PayloadAction} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"

import type { UserSettingsState,LoginResp } from "../interfaces/AppInterface";

// Steps to import RTK to React project : 
// (1) create Redux store configureStore()  REF: "./store/store"
// (2) import the store application using provider REF: main.tsx
// (3) createSlice() [slices includes global data and reducers and key ]
// REACT <--- PROVIDER --- STORE --- SLICE(s) (Reducer functions,Data,Key)
// useSelector() hook to read data 
// dispatch(reducer Function to call functions )
 
const initialState: UserSettingsState = {
  username: '',
  role : '',
  isLoggedIn : false, 
  myCounter : 0,
} 

export const userSettingsSlice = createSlice({
  name: 'userSettings',
  initialState,
  reducers: {
    onLogout: (state) => {
      // doesn't actually mutate the state because it uses the Immer library,
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.username = '';
      state.role = '';
    },
    onLoginSuccess: (state, action: PayloadAction<LoginResp>) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
    onIncrement : (state,action : PayloadAction<number>) => {
      state.myCounter = state.myCounter + action.payload; 
      console.log(' onIncrement ' + state.myCounter );
    }, 
    onDecrement : (state,action : PayloadAction<number>) => {
      state.myCounter = state.myCounter - action.payload; 
      console.log(' onDecrement ' + state.myCounter );
    }, 
    
  },
})

export const { onLogout,onLoginSuccess,onIncrement,onDecrement } = userSettingsSlice.actions

export default userSettingsSlice.reducer;
