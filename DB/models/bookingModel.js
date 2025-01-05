import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  phone: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  guests: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  date: {
    type: mongoose.Schema.Types.Date,
    required: true,
  },
  time: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});

export default mongoose.model.category ||
  mongoose.model("booking", bookingSchema);
