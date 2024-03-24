const express = require('express');
const router = express.Router();
const fs = require('fs');

// Load users from JSON file
const usersData = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8'));

// Login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Authenticate user
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if user exists and password matches
    const user = usersData.users.find(user => user.username === username && user.password === password);
    if (user) {
        req.session.authenticated = true; // Set session flag for authentication
        res.redirect('/admin');
    } else {
        res.redirect('/auth/login');
    }
});


// Login page
router.get('/signup', (req, res) => {
    res.render('registration');
});

// Authenticate user
router.post('/signup', (req, res) => {
    const { fullName,username, password } = req.body;
    // Check if username already exists
    const userExists = usersData.users.find(user => user.username === username);
    if (userExists) {
        res.redirect('/auth/signup');
    } else {
        // Add new user to usersData
        usersData.users.push({ fullName,username, password });
        // Write updated usersData to users.json file
        // console.log(JSON.stringify(usersData, null, 2))
        fs.writeFileSync('./data/users.json', JSON.stringify(usersData, null, 2));
        res.redirect('/auth/login');
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy(); // Destroy session
    res.redirect('/');
});

module.exports = router;
