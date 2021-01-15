// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/', (req, res) => {
    // findAll returns all entries for a table when used with no options
    
    db.Project.findAll({})
      .then((data) => {
        console.log(data);
        // res.sendStatus(200);
        res.render('index', {
          Project: data,
        );
    });
  });

  // app.get('/', (req, res) => res.send('Project'));
};
