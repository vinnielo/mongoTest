const mongoose = require("mongoose");

const uri = 'mongodb+srv://vinnielo001:incredibleBee001@cluster0.ol3bz.mongodb.net/?retryWrites=true&w=majority'

// This is where we connect to out MongoDB//
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
