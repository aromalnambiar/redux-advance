import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totaaAmount: 0
    },
    reducers: {
        addToCart(state) {
            const NewItems = state.item
            const isItemExisted = action.item.find(item => item.id === NewItems.id)
            if (!isItemExisted) {
                state.item.push({
                    id: isItemExisted.id,
                    price: isItemExisted.price,
                    quantity: 1,
                    name: isItemExisted.name,
                    totalPrice: isItemExisted.totalPrice
                })
            }

            if (isItemExisted) {
                isItemExisted.quantity++;
                isItemExisted.totalPrice = isItemExisted.totalPrice + NewItems.price;
            }
        },
    }
})