const mongoose = require('mongoose');
require("dotenv").config();
// require("dotenv");


// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mernbooks', {  

  // this works
        mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/mernbooks?retryWrites=true&w=majority', {
  //  this works
        // mongoose.connect( 'mongodb+srv://konnen23:endalkachew23@cluster0.iaodg.mongodb.net/sampledbattles?retryWrites=true&w=majority', {

  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
