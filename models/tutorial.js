const tutorialModel = (db) => {
  class Tutorial {
    addOne(doc) {
      return db.collection('tutorial').insertOne(doc)
        .then((result) => result)
        .catch((error) => error);
    }
  
    find(docs) {
      return db.collection('tutorial').find(docs).toArray()
        .then((data) => data)
        .catch((error) => error);
    }
  }

  return Tutorial;
};


module.exports = tutorialModel;