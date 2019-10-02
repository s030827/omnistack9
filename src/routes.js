const express = require('express');
const routes  = express.Router();

routes.get('/users', (_req, _res) => {
  return _res.json({ message: "Hello Word!",
                     idade: _req.query.idade });
})

routes.put('/users/:id', (_req, _res) => {
  return _res.json({ id: _req.params.id });
})

routes.post('/users', (_req, _res) => {
  return _res.json({ id: _req.body});
})

module.exports = routes;