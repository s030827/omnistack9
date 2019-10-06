// import express from 'express';
const express  = require('express');
const mongoose = require('mongoose');
const routes   = require('./routes');
const cors     = require('cors');

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@omnistack-ixxc3.mongodb.net/omnistack9_dev?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// req.query  = to filter queries
// req.params = acess routes to update, delete...
// req.body   = body for request use to create and edit
