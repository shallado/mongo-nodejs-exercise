const { ObjectId } = require("mongodb");

const tutorialModel = (db) => {
  class Tutorial {
    addOne(doc) {
      return db.collection('tutorials').insertOne(doc)
        .then((result) => result)
        .catch((error) => error);
    }
  
    find(docs) {
      return db.collection('tutorials').find(docs).toArray()
        .then((result) => result)
        .catch((error) => error);
    }

    findOne(id) {
      return db.collection('tutorials').findOne({ _id: ObjectId(id) })
        .then((result) => result)
        .catch((err) => err);
    }
  }

  return Tutorial;
};


module.exports = tutorialModel;