const mongoose = require('mongoose');

let bookingSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email_address: { type: String ,required: true},
    select_service: { type: String , required: true},
    preferred_date: { type: String , required: true},
    preferred_time: { type: String , required: true},
    additional_notes: { type: String , required: true},
    // location: { type: String, required: true },
},
 { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
 );

module.exports = mongoose.model('bookingforms', bookingSchema);