const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const winston = require('winston');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());

// Morgan middleware for logging HTTP requests
app.use(morgan('combined'));

// Setting up Winston logger for activity logging
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

// Custom middleware to log activity in the app
app.use((req, res, next) => {
  logger.info(`Request to ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
