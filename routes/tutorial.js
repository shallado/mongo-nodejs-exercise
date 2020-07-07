const express = require('express');
const tutorialController = require('../controllers/tutorialController');

const router = express.Router();

const tutorialRouter = (app) => {
  router.post('/', tutorialController.create);

  router.get('/', tutorialController.findAll);

  router.get('/:id', tutorialController.findById);

  router.post('/:id', tutorialController.findAndUpdateById);

  app.use('/tutorials', router);
}

module.exports = tutorialRouter;