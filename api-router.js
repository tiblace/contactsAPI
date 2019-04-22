var router = require ('express').Router();
var contactController = require('./controller');

router.get('/', function(req, res) {
    res.json({
        status: 'API is working.',
        message: 'Welcome to my API!'
    });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);
    
    
module.exports = router;