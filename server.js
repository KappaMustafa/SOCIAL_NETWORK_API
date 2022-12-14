const express = require('express');
const db = require('./config/connection');
const api_routes = require('./routes/api_routes');
const Users = require('./models/Users');


const PORT = process.env.PORT || 9999;
const app = express();

Users.find()
    .then(users => console.log(users));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', api_routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
});