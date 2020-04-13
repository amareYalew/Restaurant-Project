const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/user.model');


router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/signup');
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const newUser = new User({
                        username: username,
                        email: email,
                        password: hashedPassword,
                        cart: { items: [] }
                    });

                    return newUser.save();
                })
                .then(() => res.json('User added!'))

        })
        .catch(err => res.status(400).json('Error: ' + err));
})
    module.exports = router;