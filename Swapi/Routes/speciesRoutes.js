const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Species = require('../models/starships');
const db = mongoose.connection;
// Route de création d'une espece


// Route pour obtenir tous les espece
router.get('/', async (req, res) => {
    try {
        const species = await Species.find();
        res.json(species);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const species = await Species.create(req.body);
        res.status(201).json(species);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});
// Route de lecture d'une espece par ID
router.get('/:id', async (req, res) => {

    let species;
    try {
        species = await Species.findById(req.params.id)
        if (species == null) {
            return res.status(404).json({ message: 'Cannot find person' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(species);


});

// Route de mise à jour d'une espece
router.patch('/:id', async (req, res) => {
    try {
        const species = await starships.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (species) {
            res.json(species);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update person' });
    }
});

// Route de suppression d'une espece
router.delete('/:id', async (req, res) => {
    try {
        const species = await Species.findByIdAndDelete(req.params.id);
        if (species) {
            res.json(species);
        } else {
            res.status(404).json({ error: 'Species not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete species' });
    }
});

module.exports = router;
