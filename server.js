require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
const db = require('./models');

const PORT = process.env.PORT || 80;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('client/build'));

const userInViews = require('./lib/middleware/userInViews');

require("./routes/problems")(app);
require("./routes/authors")(app);
require("./routes/solutions")(app);
// ..

const syncOptions = { force: true }

db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`)
    });
  });
  
  module.exports = app;