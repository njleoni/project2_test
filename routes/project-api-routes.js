// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/', (req, res) => {
    // findAll returns all entries for a table when used with no options
    db.Project.findAll({}).then((dbProject) => {
        res.render('index', projects)
    });
  });
};
