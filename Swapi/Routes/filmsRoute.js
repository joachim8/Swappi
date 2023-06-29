const express = require('express');
const router = express.Router();
const Films = require('../models/films');


// Route de création d'une personne


// Route pour obtenir tous les films
router.get('/', async (req, res) => {
    try {
        const films = await Films.find();
        res.json(films);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const film = await Films.create(req.body);
        res.status(201).json(film);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});
// Route de lecture d'une personne par ID
router.get('/:id', async (req, res) => {

    let film;
    try {
        film = await Films.findById(req.params.id)
        if (film == null) {
            return res.status(404).json({ message: 'Cannot find film' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(film);


});

// Route de mise à jour d'un film
router.patch('/:id', async (req, res) => {
        try {
            const films = await Films.findbyIdAndUpdate( req.params.id , req.body );
            if (!films) return res.status(404).json({ error: 'Film not found' });
            res.status(201).json(films);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
});

// Route de suppression d'une personne
router.delete('/:id', async (req, res) => {
    try {
        const film = await Films.findByIdAndDelete(req.params.id);
        if (film) {
            res.json(film);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;
