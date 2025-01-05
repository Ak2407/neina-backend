import bookingModel from "../models/bookingModel.js";

const bookingRepo = {
  createBooking: async (bookingData) => {
    return await bookingModel.create(bookingData);
  },

  getBooking: async (bookingId) => {
    return await bookingModel.findById(bookingId);
  },

  deleteBooking: async (bookingId) => {
    return await bookingModel.findByIdAndDelete(bookingId);
  },

  getBookingsForDate: async (date) => {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await bookingModel
      .find({
        date: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
      })
      .select("time -_id");
  },
};

export default bookingRepo;
