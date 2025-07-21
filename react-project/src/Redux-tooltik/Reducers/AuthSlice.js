import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  isAuthenticate: false,
  LoginUserDetails: {
    userName: "",
    passWord: ""
  },
  isOpenLogin: false
}


export const AuthSlice = createSlice({
  name: 'signup_form',
  initialState: globalState,
  reducers: {
    AuthLogin: (state,action) => {
      state.LoginUserDetails.userName = action.payload.userName;
      state.LoginUserDetails.passWord = action.payload.passWord; 

      state.isAuthenticate = true;
    },
    OpenLogin: (state,action) => {
      state.isOpenLogin = action.payload;
    }
  },
})

export const { AuthLogin, OpenLogin} = AuthSlice.actions

export default AuthSlice.reducer