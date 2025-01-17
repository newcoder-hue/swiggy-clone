const express = require('express')
const mongoose = require('mongoose')
const items = require('./models/Items.js')
const Restaurants = require('./models/Restaurants.js')
const cors = require('cors')
const app = express()

const PORT = 5000 || 5001

app.use(cors())

app.get('/items', (req, res) => {
    items.find().then(items => res.json(items))
})

app.get('/restaurants', (req, res) => {
    Restaurants.find().then(restaurant => res.json(restaurant))
})

mongoose.connect("mongodb://localhost:27017/swiggy-items", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("mongodb is connected"))
    .catch((error) => console.log("Error: mongodb connected error", error))


app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})