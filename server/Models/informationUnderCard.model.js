const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema 
const informationUnderCardSchema = new Schema({
    title: String, 
    numberCas: String
});

// Model
const informationUnderCard = mongoose.model('informationUnderCard', informationUnderCardSchema);

module.exports = informationUnderCard