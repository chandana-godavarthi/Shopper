import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userid : String,
    imgurl : {
        type:String,
    },
    email : {
        type:String,
        required:true,
    },
    name :String,
})

const profileModel = new mongoose.model("userProfile",schema);

export default profileModel;