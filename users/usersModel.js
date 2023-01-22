import {Schema, model} from "mongoose";

const userSchema = new Schema ({
    firstName: {String, required: true},
    lastName: {String, required: true},
    email: {String, required: true, unique: true},
    userName: {String, required: true, unique: true},
    administrator: {Boolean, required: true, default: false}
}, {timestamps: true});

const User = model("User", userSchema);

export default User

