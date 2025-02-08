const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./utils/logger');
const errorHandler = require('./middlewares/errorHandler');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger);

// Routes
app.use('/api/tasks', taskRoutes);

// Error Handler
app.use(errorHandler);

// Connect to Database
connectDB();

module.exports = app;