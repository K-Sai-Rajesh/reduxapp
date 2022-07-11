import { createStore } from 'redux'

const reducer = (state = {counter:0}, action) => {
    
    if(action.type ==='+') return {counter : state.counter+1}
    else if(action.type ==='-') return {counter : state.counter-1}
    else if(action.type === 'add') return {counter : state.counter + action.payload}

    return state

}

export const store = createStore(reducer)