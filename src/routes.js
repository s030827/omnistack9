const express           = require('express');
const multer            = require('multer');

const uploadConfig        = require('./config/upload')
const SessionController   = require('./controllers/SessionController');
const SpotController      = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store)

routes.post('/spots', upload.single('thumbnail'), SpotController.store)
routes.post('/spots/:spot_id/bookings', BookingController.store)
routes.get('/spots', SpotController.index)

routes.get('/dashboard', DashboardController.show)


module.exports = routes;


// routes.get('/users', (_req, _res) => {
//   return _res.json({ message: "Hello Word!",
//                      idade: _req.query.idade });
// })

// routes.put('/users/:id', (_req, _res) => {
//   return _res.json({ id: _req.params.id });
// })
