var mongoose = require('mongoose');

var BilletSchema = new mongoose.Schema({
  code: String

});

mongoose.model('Billet', BilletSchema);