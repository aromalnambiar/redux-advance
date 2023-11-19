import { createSlice } from "@reduxjs/toolkit";



const showCartSlice = createSlice({
    name: "showcart",
    initialState: {showCart: false},
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart
        }
    }
})



export const showCartActions =  showCartSlice.actions
export default showCartSlice;