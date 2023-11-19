import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totalAmount: 0
    },
    reducers: {
        addToCart(state, action) {
            const NewItems = action.payload
            const isItemExisted = state.item.find(item => item.id === NewItems.id)
            state.totalAmount++;
            if (!isItemExisted) {
                state.item.push({
                    id: NewItems.id,
                    price: NewItems.price,
                    quantity: 1,
                    name: NewItems.title,
                    totalPrice: NewItems.totalPrice
                })
            }else{
                isItemExisted.quantity++;
                isItemExisted.totalPrice = isItemExisted.totalPrice + NewItems.price
            }
        },

        removedFromCart(state, action) {
            const id = action.payload
            const isItemExisted = state.item.find(item => item.id === id)
            state.totalAmount--;
            if (isItemExisted.quantity === 1) {
                state.item = state.item.filter(item => item.id !== id)
            }else{
                isItemExisted.totalPrice--;
                // isItemExisted.totalPrice = isItemExisted.totalPrice + isItemExisted.price;
            }
        }
    }
})



export const cartSliceActions = cartSlice.actions;
export default cartSlice;