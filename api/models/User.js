const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        minlength: 6, // Use `minlength` instead of `min`
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
        minlength: 4, // Use `minlength` instead of `min`
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
        type: [Schema.Types.ObjectId], // Use Schema.Types.ObjectId for storing references to other documents
        default: [],
    },
    following: {
        type: [Schema.Types.ObjectId], // Use Schema.Types.ObjectId for storing references to other documents
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema); // Change "Users" to "User" for consistency
module.exports = User; // Change "exports.module" to "module.exports"
