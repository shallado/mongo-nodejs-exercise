const tutorialModel = (db) => {
  class Tutorial {
    // Create and Save a new Tutorial
    addOne(doc) {
      return db.collection('tutorial').insertOne(doc)
        .then((result) => result)
        .catch((error) => error);
    }
  
    // Retrieve all Tutorials from the database.
  
    // Find a single Tutorial with an id
  
    // Update a Tutorial by the id in the request
  
    // Delete a Tutorial with the specified id in the request
  
    // Delete all Tutorials from the database.
  
    // Find all published Tutorials
  }

  return Tutorial;
};


module.exports = tutorialModel;