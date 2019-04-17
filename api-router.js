var router = require ('express').Router();

router.get('/', function(req, res) {
    res.json({
        status: 'API is working.',
        message: 'Welcome to my API!'
    });
});

module.exports = router;