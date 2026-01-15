import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
            minlength: 6
        },

        age: {
            type: Number,
            default: 18
        },

        isActive: {
            type: Boolean,
            deafult: true
        }
    },
    {
        timestamps: true 
    }
);

const User = mongoose.model("User", userschema);

export default User