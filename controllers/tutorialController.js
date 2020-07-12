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
};

// Update a Tutorial by the id in the request
exports.findAndUpdateById = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  Tutorial.prototype.updateOne(id, updates)
    .then((tutorial) => {
      if (!tutorial) {
        return res.status(404).send(
          'Unable to find tutorial to update try again'
        );
      }
      
      res.send({
        message: 'Successfully updated a tutorial',
        tutorial
      });
    })
    .catch((error) => res.status(500).send({
      message: 'Error occurred while find and updating a tutorial',
      error
    }));
};

// Delete a Tutorial with the specified id in the request
exports.findAndDeleteById = (req, res) => {
  const { id } = req.params;

  Tutorial.prototype.deleteOne(id)
    .then((tutorial) => {
      if (!tutorial) {
        return res.status(404).send(
          'Unable to find the tutorial to delete try'
        );
      }

      res.send({
        message: 'Successfully deleted tutorial',
        tutorial
      })
    })
    .catch((error) => res.status(500).send({
      message: 'Error occurred while finding and deleting a tutorial',
      error
    }));
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.prototype.delete()
    .then((data) => res.send('Successfully deleted all tutorials'))
    .catch((error) => res.status(500).send({
      message: 'Error occurred deleting tutorials',
      error
    }));
}

// Find all published Tutorials
exports.findPublished = (req, res) => {
  const { published } = req.query;
  console.log(published);

  Tutorial.prototype.find({
      published
    })
    .then((tutorials) => {
      if (tutorial.length === 0) {
        return res.status(404).send('Unable to published tutorials try again');
      }

      res.send({
        message: 'Successfully found published tutorials',
        tutorials
      });
    })
    .catch((error) => res.status(500).send(
      `Error occurred while finding published tutorials \n ${error}`
    ));
}