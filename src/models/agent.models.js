import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const agentSchema = new Schema(
    {
       firstName: {
        type: String,
        required: true,
        trim: true,
        index: true,
       },
       lastName:{
        type: String,
        required: true,
        trim: true,
        index: true,
       },
       email:{
        type: String,
        required: true,
        lowercase: true,
       },
       password:{
        type: String,
        required: [true, "Password is required"],
       },
       companyName:{
        type: String
       },
       phone:{
        type: String
       },
       avatar: {
        type: String,
      },
      refreshToken: {
        type: String,
      },
    }, 
    {timestamps: true});

//encrypting password    
//encrypting password 

// comparing password
// comparing password

// generating access token
// generating access token

// generating refresh token
// generating refresh token

export const Agent = mongoose.model("Agent", agentSchema);    