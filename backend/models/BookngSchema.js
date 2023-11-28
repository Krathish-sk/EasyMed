import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    ticketPrice: { type: String, required: true },
    appointment: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
