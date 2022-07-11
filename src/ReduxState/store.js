import {configureStore, createSlice} from '@reduxjs/toolkit'
import Auth from './Auth/Auth';
// import { createStore } from 'redux'

// const reducer = (state = {counter:0}, action) => {

//     if(action.type ==='+') return {counter : state.counter+1}
//     else if(action.type ==='-') return {counter : state.counter-1}
//     else if(action.type === 'add') return {counter : state.counter + action.payload}

//     return state

// }

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter : 0},
    reducers : {
        increament(state){
            state.counter++
        },
        decreament(state){
            state.counter--
        },
        addBy(state, action){
            state.counter += action.payload;
        }
    }
})

export const store = configureStore({
    reducer : {
        auth : Auth.reducer,
        counter : counterSlice.reducer
    }
})

export const action = counterSlice.actions


// export const store = createStore(reducer)