import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import all_product from "../components/assets/all_product";

export const counterSlice = createSlice({
  name: "cartslice",
  initialState: {
    item: [],
    count: 0,
    proPrice: 0,
    checkPrice: 0,
    shipPrice: 0,
    isAuth: false,
    userid: null,
  },
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserId: (state, action) => {
      // console.log(action.payload);
      state.userid = action.payload;
      // console.log(state.userid);
    },
    setItem: (state, action) => {
      state.item = action.payload;
      console.log(state.item);
    },
    setproPrice: (state, action) => {
      state.proPrice = action.payload;
    },
    setcheckPrice: (state, action) => {
      state.checkPrice = action.payload;
    },
    setshipPrice: (state, action) => {
      state.shipPrice = action.payload;
    },
    addProduct: (state, action) => {
      const newItem = state.item.find(
        (ele) => ele.itemid === action.payload.id
      );
      if (!newItem) {
        state.item.push({ itemid: action.payload.id, quantity: 1 });
      } else {
        const index = state.item.findIndex(
          (ele) => ele.itemid === newItem.itemid
        );
        state.item[index].quantity++;
      }
      const x = all_product.find((ele) => ele.id === action.payload.id);
      state.proPrice += x.new_price;
      state.shipPrice = (5 / 100) * state.proPrice;
      if (state.shipPrice > 10) state.shipPrice = 10;
      state.checkPrice = state.proPrice + state.shipPrice;
      state.count++;
    },
    removeProduct: (state, action) => {
      const index = state.item.findIndex(
        (ele) => ele.itemid === action.payload.id
      );
      const x = all_product.find((ele) => ele.id === state.item[index].itemid);
      state.count -= state.item[index].quantity;
      state.proPrice -= state.item[index].quantity * x.new_price;
      state.shipPrice = (5 / 100) * state.proPrice;
      if (state.shipPrice > 10) state.shipPrice = 10;
      state.checkPrice = state.proPrice + state.shipPrice;
      state.item = state.item.filter((ele) => ele.itemid != action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state.count++;
      const index = state.item.findIndex(
        (ele) => ele.itemid === action.payload.id
      );
      const x = all_product.find((ele) => ele.id === state.item[index].itemid);
      state.proPrice += x.new_price;
      state.shipPrice = (5 / 100) * state.proPrice;
      if (state.shipPrice > 10) state.shipPrice = 10;
      state.checkPrice = state.proPrice + state.shipPrice;
      state.item[index].quantity++;
    },
    decreaseQuantity: (state, action) => {
      const index = state.item.findIndex(
        (ele) => ele.itemid === action.payload.id
      );
      const x = all_product.find((ele) => ele.id === state.item[index].itemid);
      if (state.item[index].quantity > 1) {
        state.count--;
        state.proPrice -= x.new_price;
        state.shipPrice = (5 / 100) * state.proPrice;
        if (state.shipPrice > 10) state.shipPrice = 10;
        state.checkPrice = state.proPrice + state.shipPrice;
        state.item[index].quantity--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCount,
  setproPrice,
  setcheckPrice,
  setshipPrice,
  setUserId,
  setItem,
  setAuth,
  addProduct,
  removeProduct,
  increaseQuantity,
  decreaseQuantity,
} = counterSlice.actions;

export default counterSlice.reducer;
