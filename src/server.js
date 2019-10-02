const express = require('express')
// import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (_req, _res) => {
  return _res.json({ message: "Hello Word!",
                     idade: _req.query.idade });
})

app.put('/users/:id', (_req, _res) => {
  return _res.json({ id: _req.params.id });
})

app.post('/users', (_req, _res) => {
  return _res.json({ id: _req.body});
})


app.listen(3333);

// req.query  = to filter queries
// req.params = acess routes to update, delete...
// req.body   = body for request use to create and edit 