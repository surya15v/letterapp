const express = require('express');
const passport = require('passport');
const { google } = require('googleapis');
const router = express.Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect(`http://localhost:5173/dashboard?token=${req.user.accessToken}`);
});

module.exports = router;
