const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Vehicle = require('../Models/vehicles');
const db = mongoose.connection;
// Route de création d'une personne


// Route pour obtenir tous les peoples
router.get('/', async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const vehicle = await Vehicle.create(req.body);
        res.status(201).json(vehicle);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});
// Route de lecture d'une personne par ID
router.get('/:id', async (req, res) => {

    let vehicle;
    try {
        vehicle = await Vehicle.findById(req.params.id)
        if (vehicle == null) {
            return res.status(404).json({ message: 'Cannot find person' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
    res.json(person);


});

// Route de mise à jour d'une personne
router.patch('/:id', async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (vehicle) {
            res.json(person);
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
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;
