var mongoose = require('mongoose');

//Set the db schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String
    },
    phone: {
        type: String
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

var Contact = module.exports = mongoose.model('Contact', contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}