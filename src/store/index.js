import {configureStore} from '@reduxjs/toolkit'
import showCartSlice from './show-cart';
import cartSlice from './cart-slice';


const store = configureStore({reducer: {show: showCartSlice.reducer, cart: cartSlice.reducer}})


export default store;