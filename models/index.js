const { MongoClient } = require('mongodb');
const { url, dbName } = require('../config/db');
const tutorialModel = require('./tutorial');

 const client = new MongoClient(url, {
   useUnifiedTopology: true
 });

 client.connect()
   .then(() => {
     console.log('Successfully connected to the database');
   })
   .catch((err) => console.log('Unable to connect to the database \n', err));
 
const db = client.db(dbName);
const Tutorial = tutorialModel(db);

module.exports = {
  db,
  Tutorial
};