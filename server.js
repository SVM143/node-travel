const express = require('express');
const morgan = require('morgan'); // middleware for logging
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const middleware = require('./src/middleware');
const routes = require('./src/routers/router');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  . then(() => console.log('Connected'))
  . catch((err) => console.log('Caught ', err.stack));

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({
    message: 'Hellow Server',
  });
});
app.use('/api/log', routes);
app.use(middleware.notFound);
app.use(middleware.errorHandler);

app.listen(port, () => {
  console.log('server start at port number', port);
});
