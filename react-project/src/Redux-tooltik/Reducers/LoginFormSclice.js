import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const globalState = {
  userName: "",
  password: ""
}


export const LoginFormSlice = createSlice({
  name: 'login_form',
  initialState: globalState,
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  },
})

export const { increment } = LoginFormSlice.actions

export default LoginFormSlice.reducer