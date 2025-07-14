import { configureStore } from '@reduxjs/toolkit'
import LoginFormSclice from './Redux-tooltik/Reducers/LoginFormSclice';
import  SignUpFormSlice  from './Redux-tooltik/Reducers/SignUpFormSlice';


export const store = configureStore({
  reducer: {
    LoginForm: LoginFormSclice,
    SignUpForm: SignUpFormSlice
  },
})
