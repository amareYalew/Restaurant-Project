const router = require('express').Router();
let Rating = require('../models/rating.model');

router.route('/').get((req, res) => {
    Comment.find()
        .then(ratings => res.json(ratings))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const rating = req.body.rating;

    const newRating = new Rating({ rating });
    console.log(newRating)
    newRating.save()
        .then(() => res.json('Rating added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;