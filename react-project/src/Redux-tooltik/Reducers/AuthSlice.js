import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  isAuthenticate: false,
  LoginUserDetails: {
    userName: "",
    passWord: ""
  }
}


export const AuthSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    AuthLogin: (state,action) => {
      state.LoginUserDetails.userName = action.payload;
      state.LoginUserDetails.passWord = action.payload; 
    }
  },
})

export const { AuthLogin } = AuthSlice.actions

export default AuthSlice.reducer