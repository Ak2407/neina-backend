import bookingRepo from "../DB/repos/bookingRepo.js";

const bookingCtrl = {
  createBooking: async (req, res) => {
    try {
      const booking = await bookingRepo.createBooking(req.body.bookingData);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error in creating booking" });
    }
  },

  getBooking: async (req, res) => {
    try {
      const obj = req.params;
      const { id } = obj;
      const booking = await bookingRepo.getBooking(id);
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error in getting booking" });
    }
  },

  deleteBooking: async (req, res) => {
    try {
      const obj = req.params;
      const { id } = obj;
      const booking = await bookingRepo.deleteBooking(id);
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error in deleting booking" });
    }
  },

  getAvailableTimeSlots: async (req, res) => {
    try {
      const { date } = req.params;
      const bookings = await bookingRepo.getBookingsForDate(date);

      // Get all booked time slots for the date
      const bookedTimeSlots = bookings.map((booking) => booking.time);

      // Define all possible time slots (moved from frontend)
      const allTimeSlots = [
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
      ];

      // Filter out booked slots
      const availableTimeSlots = allTimeSlots.filter(
        (slot) => !bookedTimeSlots.includes(slot)
      );

      res.status(200).json({ availableTimeSlots, bookedTimeSlots });
    } catch (error) {
      res.status(500).json({ message: "Error fetching available time slots" });
    }
  },
};

export default bookingCtrl;
