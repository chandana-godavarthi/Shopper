import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../redux/cartSlice.js"
import profileReducer from "../redux/profileSlice.js"

export default configureStore({
  reducer: {
    cartslice:cartReducer,
    profileslice:profileReducer,
  }
})