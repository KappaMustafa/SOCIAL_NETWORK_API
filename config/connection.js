const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Social_Network_Api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


module.exports = mongoose.connection;
