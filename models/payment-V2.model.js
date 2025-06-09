import mongoose, { Schema } from "mongoose";
export const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  course: {
    type: Number,
    required: true,
  },
  plan: {
    type: Number,
    required: true,
  },
  file: {
    type: String,
    // required: true,
  }
});
paymentSchema.set('timestamps', true)
export const PaymentV2s = mongoose.model("PaymentV2", paymentSchema);