const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

// Routes
const movieController = require('./controllers/movieController');
const adminController = require('./controllers/adminController');
const authController = require('./controllers/authController'); // Adding the auth controller
app.use('/', movieController);
app.use('/admin', adminController);
app.use('/auth', authController); // Adding the auth route

// Start server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
