var express = require('express');
var router = express.Router();
var Book = require('../models/book');
var Tour = require('../models/tour');
var Cinema = require('../models/cinema');
var City = require('../models/city');
var User = require('../models/user');

/* GET home page. */

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/books-demo-2', async(req, res) => {
    try {
        let books = await Book.find({});
        res.render('books', {
            title: 'Книги',
            books: books
        });
    } catch (e) {
        res.status(500).send(e);
    }
});



router.get('/tours-demo', async(req, res) => {
    try {
        let tours = await Tour.find({});
        res.render('tours', {
            title: 'Назва маршруту',
            tours: tours
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.get('/cinemas-demo', async(req, res) => {
    try {
        let cinemas = await Cinema.find({});
        res.render('cinemas', {
            title: 'Назва залу',
            cinemas: cinemas
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.get('/cities-demo', async(req, res) => {
    try {
        let cities = await City.find({}).limit(100);
        res.render('cities', {
            title: 'Назва програми',
            cities: cities
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

router.post('/cities-demo', async(req, res) => {
    let countrySearch = new RegExp(req.body.country, "i");
    console.log(typeof(countrySearch));
    try {
        let cities = await City.find({
            country: countrySearch
        }).limit(100);
        res.render('cities', {
            title: 'Назва програми',
            cities: cities
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});


router.get('/users-demo', async(req, res) => {
    try {
        let users = await User.find({});
        res.render('users', {
            title: 'Користувач',
            users: users
        });
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
});

module.exports = router;