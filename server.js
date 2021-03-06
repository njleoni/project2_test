// - Dependency
const express = require('express');

// const javascript = require('../views/views.js');

// - Sets up express app
const app = express();
const PORT = process.env.PORT || 8080;

// - Requires our models for syncing
const db = require('./models');

// - Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// - Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// app.use(javascript);

// - Sets handlebars
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require('./routes/project-api-routes.js')(app);

// - Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

