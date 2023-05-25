const express = require('express');
const mongoose = require('./config/connection'); // Assuming your connection.js file is in the config folder
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connection.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}.`);
  });
});
