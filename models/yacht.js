const mongoose = require('mongoose')
const Schema = mongoose.Schema

const yachtSchema = new Schema({
    name: String,
    type: String,
    desctription: String,
    photo: String,
    price: String,
    bookings: [
        {
            dateFrom: Date,
            dateTo: Date
        }
    ]
})

module.exports = mongoose.model('Yacht', yachtSchema)