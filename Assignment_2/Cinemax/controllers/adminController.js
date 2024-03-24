const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.js');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    },
});

// Multer configuration for file upload
const upload = multer({ storage: storage }); // Specify the destination directory for file uploads

// Admin page
router.get('/', (req, res) => {
    // Check if user is authenticated
    if (!req.session.authenticated) {
        return res.redirect('/auth/login');
    }
    res.render('admin', { req: req });
});

// Add movie form
router.get('/add', (req, res) => {
    // Check if user is authenticated
    if (!req.session.authenticated) {
        return res.redirect('/auth/login');
    }
    res.render('add_movie', { req: req });
});

// Add movie
router.post('/add', upload.single('poster'), (req, res) => {
    // Check if user is authenticated
    if (!req.session.authenticated) {
        return res.redirect('/auth/login');
    }

    // Extract form data
    const { title, storyline,timing, cast, day } = req.body;
    // File path of the uploaded poster
    const posterFilePath = req.file.path.split('\\')[1] + "\\" + req.file.path.split('\\')[2];
    console.log(posterFilePath);

    // Add movie to database
    Movie.addMovie(title, storyline,timing, cast, day, posterFilePath)
    console.log('Movie added successfully.');
    res.json(200,"Movie added successfully.")
});

module.exports = router;
