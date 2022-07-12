import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name : 'Cart',
    initialState : {
        cartItems : [],
        qts : 0,
        totalPrice : 0
    },
    reducers : {
            addItem(state,action){
                const item = state.cartItems.find(item => item.id === action.payload.id)
                if(item !== undefined){
                    item.qts++
                    state.qts++
                    state.totalPrice += item.price
                }
                else {
                    state.cartItems.push(action.payload)
                    state.qts++
                    state.totalPrice += action.payload.price
                }
            },
            removeItem(state,action){
                const item = state.cartItems.find(item => item.id === action.payload.id)
                if(item !== undefined){
                    if(item.qts === 1){
                        item.qts--
                        state.qts--
                        state.totalPrice -= item.price
                        state.cartItems.splice(state.cartItems.indexOf(item),1) 
                    }
                    else{
                        item.qts--
                        state.qts--
                        state.totalPrice -= item.price
                    }
                }
                else {
                    state.cartItems.splice(state.cartItems.indexOf(action.payload),1)
                    state.qts--
                    state.totalPrice -= action.payload.price
                }
            }
    }
})

export default CartSlice
export const cartActions = CartSlice.actions