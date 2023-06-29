const mongoose = require('mongoose');


const speciesSchema = new mongoose.Schema({
    edited: {
        type: Date,
        required: true
    },

   classification: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    eye_colors: {
        type: String,
        required: true
    },
    people: {
        type: Array,
        required: true
    },
    skin_colors: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    hair_colors: {
        type: String,
        required: true
    },
    homeworld: {
        type: Number,
        required: true
    },
    average_lifespan: {
        type: Number,
        required: true
    },
    average_height: {
        type: Number,
        required: true
    }

},
    { collection: 'species' }
);

module.exports = mongoose.model('species', speciesSchema);