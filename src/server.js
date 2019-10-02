const express = require('express');
const routes  = require('./routes')
// import express from 'express';

const app = express();
app.use(express.json());

app.listen(3333);
app.use(routes);

// req.query  = to filter queries
// req.params = acess routes to update, delete...
// req.body   = body for request use to create and edit 