// Requiring our models
const db = require('../models');

// Routes
module.exports = (app) => {
  // GET route for getting all of the todos
  app.get('/', (req, res) => {
    // findAll returns all entries for a table when used with no options
    
    db.Project.findAll({})
      .then((data) => {
        // const test = res.json(data);
        // console.log(data.ToJSON());
        // res.sendStatus(200);
        // const myProjects = {
        //   Projects: data,
        // };
        // console.log(myProjects);
        // res.render('index', myProjects);
        res.render('index', {
          Projects: data,
        });
    });
  });

  // app.get('/', (req, res) => res.send('Project'));
};
