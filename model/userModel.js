import mongoose from "mongoose";


const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "",
    },
    isAvatarImageSet: {
        type: Boolean,
        default: false,
      },
});

export default mongoose.model("User", userSchema)