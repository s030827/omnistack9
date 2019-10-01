const express = require('express')
// import express from 'express';

const app = express();

app.get('/', (_req, _res) => {
  return _res.json('{ message: "Hello Word" }');
})

app.listen(3333);