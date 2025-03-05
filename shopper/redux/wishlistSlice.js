import { createSlice } from '@reduxjs/toolkit'
import all_product from '../components/assets/all_product';


export const counterSlice = createSlice({
  name: 'wishlistSlice',
  initialState: {
    wishlistitem: [],
  },
  reducers: {
    
    setwishlistItem:(state,action)=>{
        state.item=action.payload;
    },
    addwishlistProduct:  (state,action)=>{
        state.item.push({itemid:action.payload.id,quantity:1});
    },
    removewishlistProduct: (state,action)=>{
        state.item = state.item.filter((ele)=>ele.itemid!=action.payload.id);
    }
  }
})

// Action creators are generated for each case reducer function
export const { setwishlistItem,addwishlistProduct,removewishlistProduct } = counterSlice.actions

export default counterSlice.reducer