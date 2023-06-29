const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Starships = require('../models/starships');




// Route pour obtenir tous les starships
router.get('/', async (req, res) => {
    try {
        const starships = await Starships.find();
        res.json(starships);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route de création d'une personne
router.post('/', async (req, res) => {
    try {
        const starship = await Starships.create(req.body);
        res.status(201).json(starship);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});
// Route de lecture d'une personne par ID
router.get('/:id', async (req, res) => {

    let starship;
    try {
        starship = await Starships.findById(req.params.id)
        if (starship == null) {
            return res.status(404).json({ message: 'Cannot find person' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(starship);


});

// Route de mise à jour d'une personne
router.patch('/:id', async (req, res) => {
    try {
        const starship = await Starships.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (starship) {
            res.json(starship);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update person' });
    }
});

// Route de suppression d'une personne
router.delete('/:id', async (req, res) => {
    try {
        const starship = await Starships.findByIdAndDelete(req.params.id);
        if (starship) {
            res.json(starship);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;
