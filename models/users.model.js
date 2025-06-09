import mongoose, { Schema } from "mongoose";
export const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  encryptedPassword: {
    type: String,
    required: true,
  },
  // role: {
  //     type: String,
  //     enum: ["admin"],
  //     required: true
  // },
});

export const Users = mongoose.model("Users", usersSchema);
