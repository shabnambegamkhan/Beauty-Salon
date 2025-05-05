const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const connectDB = require('./db');
const Booking = require("./models/bookingScema")

const app = express();
app.use(express.json());
app.use(cors());



app.post('/api/bookingforms/booking', async (req, res) => {
    try {
        
        const {full_name, phone_number, email_address, select_service, preferred_date, preferred_time, additional_notes } = req.body;

        const newBooking = new Booking({ full_name, phone_number, email_address, select_service, preferred_date, preferred_time, additional_notes });
        await newBooking.save();

        // res.status(201).json({ success: true, message: 'Booking saved successful', data: newBeautySalon });
        res.status(201).json({ success: true, message: 'Booking saved successful' });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error while saving bookinge" });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});

