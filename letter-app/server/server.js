require('./config'); // Ensure Passport is configured before using it

require('dotenv').config();


const express = require('express');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const driveRoutes = require('./routes/drive');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/drive', driveRoutes);
app.use('/user', userRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
