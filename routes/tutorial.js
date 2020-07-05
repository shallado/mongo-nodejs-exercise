const express = require('express');
const tutorialController = require('../controllers/tutorialController');

const router = express.Router();

const tutorialRouter = (app) => {
  router.post('/', tutorialController.create);

  app.use('/tutorials', router);
}

module.exports = tutorialRouter;