const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema 
const dataCasSchema = new Schema({
    casFrance: {
        confirm: Number,
        death: Number,
        healing: Number
    },
    casMondiaux: {
        confirm: Number,
        death: Number,
        healing: Number
    }
});

// Model
const DataCas = mongoose.model('DataCas', dataCasSchema);

module.exports = DataCas