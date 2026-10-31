import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './Features/cart/cartSlice'
import userReducer from './Features/User/UserSlice'

export const store = configureStore({
  reducer: {
    cartState: cartReducer,
    userState : userReducer,
  },
})
