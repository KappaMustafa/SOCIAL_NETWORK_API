const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/Social_Network_Api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
