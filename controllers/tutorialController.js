const { Tutorial } = require('../models');

exports.create = async (req, res) => {
  const doc = req.body;
  
  Tutorial.prototype.addOne(doc)
    .then((tutorial) => res.send({
      message: 'Successfully added tutorial',
      tutorial: tutorial.ops
    }))
    .catch((error) => res.status(500).send({
      message: 'Unable to add tutorial',
      error
    }));
};