const Symposium = require('../models/symposium');
const Contributor = require('../models/contributor');

const index = (req, res, next) => {
    // let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // let sortKey = req.query.sort || 'name';
    Contributor.findById(req.user)
    // .sort(sortKey).exec((err, contributors) => {
        // if(err) return next(err);
        res.render('symposia/index', {
            // contributors,
            user: req.user,
            name: req.query.name,
            // sortKey,
        });
    // });
};

const chronicle = (req, res) => { 
    Contributor.findById(req.user)
    res.render('symposia/chronicle', {
        user: req.user,
    });
};

const newSymposium = (req, res) => { 
    res.render('symposia/new', {title: 'new symposia', user: req.user});
};

const create = (req, res) => { 
    const symposium = new Symposium(req.body);
    symposium.save(function(err) {
        if(err) return res.redirect('/symposia/new');
    res.redirect(`/symposia/chronicle`);
  });
};

const list = (req, res) => { 
    Symposium.find({}, (err, symposium) => {
        res.render('symposia/list', {user: req.user, symposium});
    });
};

const show = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
        res.render('symposia/show', {user: req.user, symposium });
    });
}

 
module.exports = {
  index,
  chronicle, 
  new: newSymposium, 
  create,
  list, 
  show,
};