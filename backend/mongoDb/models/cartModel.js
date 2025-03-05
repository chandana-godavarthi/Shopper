import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userid: {
      type: String,
      required: true, 
    },
    item: {
      type: [Object], 
      default: [],
    },
    proPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    shipPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    checkPrice: {
      type: Number,
      required: true, 
      default: 0, 
    },
    count: {
      type:Number,
      required:true,
      default: 0,
    }
  });
const cartModel = new mongoose.model("cartData",schema);
export default cartModel;