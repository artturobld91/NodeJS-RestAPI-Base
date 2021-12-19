const express = require('express');
require('dotenv').config();

const cors = require('cors');
// const { dbConnection } = require('./database/config');

// Create Express Server
const app = express();

// Configure CORS
app.use(cors());

//Body Read and Parse - Note: This line should be placed before Routes
app.use(express.json());

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

// Routes
app.use('/api/login', require('./routes/auth'))

app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});

// To Execute: npm run start:dev