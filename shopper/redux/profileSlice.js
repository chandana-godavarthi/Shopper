import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'profileslice',
  initialState: {
    profileimg : "",
    name : "",
    email : "",
    number : "",
    dob : "",
    gender : "",
  },
  reducers: {
    setprofileimg : (state,action)=>{
        state.profileimg = action.payload;
    },
    setname : (state,action)=>{
        state.name = action.payload;
    },
    setemail : (state,action)=>{
        state.email = action.payload;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setprofileimg,setname,setemail } = counterSlice.actions

export default counterSlice.reducer