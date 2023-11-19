import {configureStore} from '@reduxjs/toolkit'
import showCartSlice from './show-cart';


const store = configureStore({reducer: {show: showCartSlice.reducer}})


export default store;