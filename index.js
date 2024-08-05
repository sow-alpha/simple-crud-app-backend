const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
require('dotenv').config();
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute);



app.get('/', (req, res) => {
    res.send("hello from Node API Server");
})


mongoose.connect(process.env.MONGO_URI, {
})
    .then(() => {
        console.log("connected to databse");
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("Connection failed!")
    })

