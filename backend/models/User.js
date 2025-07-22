const mongoose = require("mongoose");

const UserShema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        profileImage: {type: String, default: null},
        role: {type: String, enum: ["user", "member"],default: "member"},//Role of the user

    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserShema);