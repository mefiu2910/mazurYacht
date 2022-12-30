const mongoose = require('mongoose')
const Yacht = require('../models/yacht')

mongoose.connect('mongodb://localhost:27017/mazur-yacht')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const seedDB = async () => {
    // await Yacht.deleteMany({})
    const y = new Yacht({ name: 'szybka zaglowka' })
    await y.save()
}

seedDB()