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
    .catch((error) => res.status(500).send({
      message: 'Error occurred while finding tutorials',
      error
    }))
};

// Find a single Tutorial with an id
exports.findById = (req, res) => {
  const { id } = req.params;

  Tutorial.prototype.findOne(id)
    .then((tutorial) => {
      if (!tutorial) {
        return res.status(404).send('Unable to find tutorial try again');
      }

      res.send({
        message: 'Successfully found tutorial',
        tutorial
      });
    })
    .catch((error) => res.send(500).send({
      message: 'Error occurred while finding a tutorial',
      error
    }));
}

// Update a Tutorial by the id in the request

// Delete a Tutorial with the specified id in the request

// Delete all Tutorials from the database.

// Find all published Tutorials