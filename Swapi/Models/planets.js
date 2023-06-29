const mongoose = require('mongoose');

const planetsSchema = new mongoose.Schema({
    edited: {
        type: Date,
        required: true
    },
    climate: {
        type: String,
        required: true
    },
    surface_water: {
        type: Number,
        required: true
    },
    diameter: {
        type: Number,
        required: true
    },
    rotation_period: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    terrain: {
        type: String,
        required: true
    },
    gravity: {
        type: String,
        required: true
    },
    orbital_period: {
        type: String,
        required: true
    },
    population: {
        type: Number,
        required: true
    },
},
    { collection: 'planets' }
);

module.exports = mongoose.model('planets', planetsSchema);