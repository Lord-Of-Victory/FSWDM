const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');

// Home page
router.get('/', (req, res) => {
    // Fetch current and upcoming movies from database
    const currentMovies = Movie.getCurrentMovies();
    const upcomingMovies = Movie.getUpcomingMovies();
    res.render('index', { currentMovies, upcomingMovies ,req: req});
});

// Schedule page
router.get('/schedule', (req, res) => {
    // Fetch schedule of movies from database
    const schedule = Movie.getSchedule();
    res.render('schedule', { schedule , req: req });
});

// Add movie to schedule
router.post('/schedule/add', (req, res) => {
    const { title, timing, day } = req.body;
    if (title && timing && day) {
        Movie.updateSchedule(day, title, timing);
        res.redirect('/schedule');
    } else {
        res.status(400).send('Bad Request: Missing title, timing, or day.');
    }
});

// Update schedule
router.post('/schedule/update', (req, res) => {
    const { title, timing, day } = req.body;
    if (title && timing && day) {
        Movie.updateSchedule(day, title, timing);
        res.redirect('/schedule');
    } else {
        res.status(400).send('Bad Request: Missing title, timing, or day.');
    }
});

module.exports = router;
