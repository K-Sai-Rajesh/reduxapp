import { createSlice } from "@reduxjs/toolkit";


const Auth = createSlice({
    name : "auth",
    initialState : {isLogged:false},
    reducers : {
        Login(state){
            state.isLogged = true
        },
        Logout(state){
            state.isLogged = false
        }
    }
})

export const authActions = Auth.actions

export default Auth