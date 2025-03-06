const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const winston = require('winston');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(morgan('combined'));
app.use((req, res, next) => {
  logger.info(`Request to ${req.method} ${req.originalUrl}`);
  next();
});
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({ filename: 'activity.log' })
  ]
});

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');

app.get('/', (req, res) => { res.status(200).json('Welcome, your app is working well') });
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
