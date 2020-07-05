const express = require('express');
const tutorialRouter = require('./routes/tutorial');
require('./models');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

tutorialRouter(app);

app.listen(port, () => console.log(
  `Successfully connected to the server on port: ${port}`
));