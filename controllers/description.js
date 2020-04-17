const Symposium = require('../models/symposium');


const create = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
        console.log(req.body);
        symposium.description = req.body.description.valueOf();
        console.log(symposium.description);
        symposium.save( (err) => {
            res.redirect(`/symposia/${symposium._id}`);
        });
    });
}

module.exports = {
  create
};
