let express = require('express');
let router = express.Router();
const seat = require('../controllers/seat');

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Credentials');
    res.header('Access-Control-Expose-Headers', 'Token');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.contentType('application/json');
    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        next();
    }
});

function makeId(len) {
    //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
    //Not so effective as the second one but is more demonstrative

    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

router.use(function (req, res, next) {
    let token = req.header('Token');
    if (typeof token === "undefined") {
        token = makeId(5);
    }
    req.user = token;
    //Auth token imitation
    res.header('Token', token);
    next();
});

let seatsRouter = express.Router();
    seatsRouter.get('/:id?', seat.getSeats);
    seatsRouter.put('/:id', seat.putSeat);
router.use('/seats', seatsRouter);

module.exports = router;