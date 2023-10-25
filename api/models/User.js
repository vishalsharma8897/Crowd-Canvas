const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {  // Schema is a class under mongoose library
        name: {
            type: String,
            min: 6,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 4
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: Array,
            default: [],
        },
        following: {
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps:true}

);

const Users = mongoose.model("User", userSchema);
exports.module = Users;