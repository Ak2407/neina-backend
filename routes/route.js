import express from "express";

const router = express.Router();

import bookingCtrl from "../controllers/bookingController.js";

router.get("/booking/id/:id", bookingCtrl.getBooking);
router.post("/booking/create", bookingCtrl.createBooking);
router.put("/booking/delete", bookingCtrl.deleteBooking);
router.get("/booking/available-slots/:date", bookingCtrl.getAvailableTimeSlots);

export default router;
