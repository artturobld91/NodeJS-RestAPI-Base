const express = require('express');
const cors = require('cors');
// const { dbConnection } = require('./database/config');
require('dotenv').config();

// Create Express Server
const app = express();

// Configure CORS
app.use(cors());

// Database Initialization
// dbConnection();

// Routes
app.get('/', (req, res) => {
    res.status(200).json({
        ok: true,
        timestamp: Date.now(),
        msg: 'NodeJS is working'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});

// To Execute: npm run start:dev