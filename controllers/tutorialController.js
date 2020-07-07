const { Tutorial } = require('../models');

// Create and Save a new Tutorial
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

// Retrieve all Tutorials from the database
exports.findAll = (req, res) => {
  Tutorial.prototype.find({})
    .then((tutorials) => {
      if (tutorials.length === 0) {
        res.status(404).send('Unable to find any tutorial try again');
      }

      res.send(tutorials);
    })
    .catch((error) => res.status(500).send(error))
};

// Find a single Tutorial with an id

// Update a Tutorial by the id in the request

// Delete a Tutorial with the specified id in the request

// Delete all Tutorials from the database.

// Find all published Tutorials