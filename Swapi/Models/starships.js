const mongoose = require('mongoose');


const starshipsSchema = new mongoose.Schema({
    MGLT: {
        type: Number,
        required: true
    },
    starship_class: {
        type: String,
        required: true
    },
    hyperdrive_rating: {
        type: String,
        required: true
    },

},
    { collection: 'starships' }
);

module.exports = mongoose.model('starships', starshipsSchema);