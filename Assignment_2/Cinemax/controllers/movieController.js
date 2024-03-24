const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

// Home page
router.get('/', (req, res) => {
    // Fetch current and upcoming movies from database
    const currentMovies = Movie.getCurrentMovies();
    const upcomingMovies = Movie.getUpcomingMovies();
    res.render('index', { currentMovies, upcomingMovies ,req});
});

// Schedule page
router.get('/schedule', (req, res) => {
    // Fetch schedule of movies from database
    const schedule = Movie.getSchedule();
    res.render('schedule', { schedule });
});

module.exports = router;
