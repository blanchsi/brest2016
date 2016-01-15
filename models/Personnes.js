var mongoose = require('mongoose');

var PersonneSchema = new mongoose.Schema({
  prenom: String,
  nom: String,
  mdp: String

});

mongoose.model('Personne', PersonneSchema);