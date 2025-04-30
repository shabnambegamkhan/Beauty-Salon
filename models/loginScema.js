const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email_address: { type: String ,required: true},
    mobile_number: { type: String , required: true},
    location: { type: String, required: true },
},
 { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
 );

module.exports = mongoose.model('User', userSchema);