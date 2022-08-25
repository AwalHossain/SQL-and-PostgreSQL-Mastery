const express = require('express');
const cors = require('cors');
const connection = require('./connection');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/user', userRoutes)
app.use('/category', categoryRoutes);
app.use('/product', productRoutes)


module.exports = app;