// app.js

const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();
const PORT = 3000;

// Middleware
app.use(cookieParser());
app.use(session({
  secret: 'secret', // Change this to a random string
  resave: false,
  saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
  let username;
  // Check if the user has a session
  if (req.session.username) {
    username = req.session.username;
  } else {
    // Check if username exists in cookies
    username = req.cookies.username;
  }
  
  if (username) {
    res.send(`Welcome back, ${username}!`);
  } else {
    res.send('Welcome! Please log in.');
  }
});

app.get('/login', (req, res) => {
  const username = 'user123'; // Hardcoded for demonstration purposes, in real world scenario you would validate the credentials
  req.session.username = username;
  res.cookie('username', username, { maxAge: 900000, httpOnly: true }); // Set cookie to expire in 15 minutes
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      res.status(500).send('Error logging out');
    } else {
      res.clearCookie('username');
      res.redirect('/');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
