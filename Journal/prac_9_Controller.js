const User = require('../models/user');
const userController = {
    login: (req, res) => {
        res.render('login');
    },

    authenticate: (req, res, next) => {
        const { username, password } = req.body;

        const correctUsername = 'yash'; const correctPassword = 'rcoem123';

        if (username === correctUsername && password === correctPassword) {
            next();
        } else {
            res.redirect('/');
        }
    },

    performLogin: (req, res) => {
        const { username, dob, email } = req.body;

        req.session.user = {
            username,
            dob, email
        };

        res.redirect('/dashboard');
    },

    dashboard: (req, res) => {
        const { user } = req.session;

        if (!user) {
            res.redirect('/');
        } else {
            res.render('dashboard', { user });
        }
    },

    changePassword: (req, res) => {
        res.render('changepass');
    },

    performChangePassword: (req, res) => {
        const { newPassword } = req.body;

        res.redirect('/dashboard');
    }
};

module.exports = userController;
