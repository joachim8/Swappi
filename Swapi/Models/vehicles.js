const mongoose = require('mongoose');


const vehicleSchema = new mongoose.Schema({
    vehicle_class: {
        type: String,
        required: true
    },
    pilots: {
        type: Array,
        required: true
    },
   

},
    { collection: 'vehicles' }
);

module.exports = mongoose.model('vehicles', vehicleSchema);