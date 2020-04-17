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

const crt = (req, res) => { 
  const symposium = new Symposium(req.body);
  console.log(symposium);
  symposium.save( (err) => {
  res.redirect(`/symposia/:id`);
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

const edit = (req, res) => {
    Symposium.findById(req.params.id, (err, symposium) => {
      // console.log("Found Symposium:", symposium);
      res.render("./symposia/edit.ejs", {user: req.user, symposium});
      
    });
  }

const update = (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
    Symposium.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, symposium) => {
        res.redirect(`/symposia/${symposium._id}`);
      }
    );
  }



module.exports = {
  index,
  chronicle, 
  new: newSymposium, 
  create,
  list, 
  show,
  update,
  edit,
  crt
};