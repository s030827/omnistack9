const express           = require('express');
const SessionController = require('./controllers/SessionController');
const routes            = express.Router();

routes.post('/sessions', SessionController.store)

module.exports = routes;


// routes.get('/users', (_req, _res) => {
//   return _res.json({ message: "Hello Word!",
//                      idade: _req.query.idade });
// })

// routes.put('/users/:id', (_req, _res) => {
//   return _res.json({ id: _req.params.id });
// })
