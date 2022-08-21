const express = require('express');
const cors = require('cors');
const connection = require('./connection')
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());



module.exports = app;