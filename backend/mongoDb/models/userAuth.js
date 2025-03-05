import mongoose from "mongoose";

const userAuthSchema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const userAuth = new mongoose.model("userauth",userAuthSchema);

export default userAuth;