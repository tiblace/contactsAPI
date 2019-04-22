var Contact = require('./model');

exports.index = function(req, res){
    Contact.get(function(err, contacts) {
        if (err){
            res.json({
                status: 'error',
                message: err
            });
        } 
        res.json({
            status: 'success',
            message: 'Contacts retrieved!',
            data: contacts
        });
    });
};

exports.new = function(req, res){
    var contact = new Contact();
    contact.name = req.body.name;
    contact.email = req.body.email;
    contact.gender = req.body.gender;
    contact.phone = req.body.phone;

    contact.save(function(err){
        if(err){
            res.json(err);
        }
        res.json({
            message: 'Contact created.',
            data: contact
        });
    });
};

exports.view = function(req, res){
    Contact.findById(req.params.contact_id, function(err, contact){
        if(err){
            res.send(err);
        }
        res.json({
            message: 'Contact details loading...',
            data: contact
        });
    });
};

exports.update = function(req, res){
    Contact.findById(req.params.contact_id, function(err, contact){
        if(err){
            res.send(err);
        }
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.gender = req.body.gender;
        contact.phone = req.body.phone;

        contact.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({
                message: 'Contact updated.',
                data: contact
            });
        });

    });
};

exports.delete = function(req, res){
    Contact.remove({
        _id: req.params.contact_id
    }, function(err, contact){
        if(err){
            res.send(err);
        }
        res.json({
            status: 'success',
            message: 'Contact deleted.'
        });
    });
};

