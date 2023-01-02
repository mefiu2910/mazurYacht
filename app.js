const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const ejsMate = require('ejs-mate')
const Yacht = require('./models/yacht')

mongoose.connect('mongodb://localhost:27017/mazur-yacht')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
    console.log("Database connected")
})

const app = express()
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/yachts', async (req, res) => {
    const yachts = await Yacht.find({})
    res.render('yachts/index', { yachts })
})

app.get('/yachts/:id', async (req, res) => {
    const yacht = await Yacht.findById(req.params.id)
    res.render('yachts/show', { yacht })
})

app.get('/yachts/:id/dates', async (req, res) => {
    const yacht = await Yacht.findById(req.params.id).populate('bookings')
    res.render('yachts/dates', { yacht })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})