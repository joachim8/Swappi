const express = require('express');
const router = express.Router();
const People = require('../models/people');

// Route de création d'une personne
router.post('/', async (req, res) => {
    try {
        const person = await People.create(req.body);
        res.status(201).json(person);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create a person' });
    }
});

// Route de lecture de toutes les personnes
router.get('/', async (req, res) => {
    try {
        const people = await People.find();
        res.json(people);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch people' });
    }
});

// Route de lecture d'une personne par ID
router.get('/:id', async (req, res) => {

        let person;
        try {
            person = await People.findById(req.params.id)
            if (person == null) {
                return res.status(404).json({ message: 'Cannot find person' });
            }
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    res.json(person);


});

// Route de mise à jour d'une personne
router.put('/:id', async (req, res) => {
    try {
        const person = await People.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (person) {
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
        const person = await People.findByIdAndDelete(req.params.id);
        if (person) {
            res.json(person);
        } else {
            res.status(404).json({ error: 'Person not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;
