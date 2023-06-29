const mongoose = require('mongoose');


const filmsSchema = new mongoose.Schema({
    edited: {
        type: Date,
        
    },
    
    producer: {
        type: String,
       
    },
    title: {
        type: String,
        
    },
    created: {
        type: Date,
        
    },
    episode_id: {
        type: Number,
       
    },
    director: {
        type: String,
        
    },
    release_date: {
        type: Date,
        
    },
    opening_crawl: {
        type: String,
       
    },
},

    { collection: 'films' }
);

module.exports = mongoose.model('films', filmsSchema);
