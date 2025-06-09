import mongoose, { Schema } from "mongoose";
export const registeredSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
registeredSchema.set("timestamps", true);
export const Registered = mongoose.model("Registered", registeredSchema);
