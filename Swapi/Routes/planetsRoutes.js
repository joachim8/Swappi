const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Planets = require('../Models/planets');



// Route pour obtenir tous les peoples
router.get('/', async (req, res) => {
    try {
        const planets = await Planets.find();
        res.json(planets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route de création d'une personne
router.post('/', async (req, res) => {
    try {
        const planets = await Planets.create(req.body);
        res.status(201).json(planets);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});
// Route de lecture d'une personne par ID
router.get('/:id', async (req, res) => {

    let planets;
    try {
        planets = await Planets.findById(req.params.id)
        if (planets == null) {
            return res.status(404).json({ message: 'Cannot find film' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(planets);


});

// Route de mise à jour d'une personne
router.patch('/:id', async (req, res) => {
    try {
        const planets = await Planets.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (planets) {
            res.json(planets);
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
        const planets = await Planets.findByIdAndDelete(req.params.id);
        if (planets) {
            res.json(planets);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;