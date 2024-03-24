const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

// Admin page
router.get('/', (req, res) => {
    // Check if user is authenticated
    if (!req.session.authenticated) {
        return res.redirect('/auth/login');
    }
    res.render('admin');
});

// Add movie
router.post('/add', (req, res) => {
    // Check if user is authenticated
    if (!req.session.authenticated) {
        return res.redirect('/auth/login');
    }
    // Add movie to database
    const { title, timing, cast } = req.body;
    Movie.addMovie(title, timing, cast);
    res.redirect('/admin');
});

module.exports = router;
