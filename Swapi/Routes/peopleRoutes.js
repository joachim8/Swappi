const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const People = require('../models/people');
const db = mongoose.connection;
// Route pour obtenir tous les peoples
router.get('/', async (req, res) => {
    try {
        const peoples = await People.find();
        res.json(peoples);
    } catch (err) {
        res.status(500).json({ message: err.message });
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


// Route POST pour créer une nouvelle personne
router.post('/', async (req, res) => {
    try {
        const newPerson = await People.create(...req.body);
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route PUT pour mettre à jour une personne existante
router.patch('/:id', async (req, res) => {
    try {
        const updatedPerson = await People.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
            
        );
        if (!updatedPerson) {
            return res.status(404).json({ message: 'Cannot find person' });
        }
        if (updatedPerson) {
            res.json(updatedPerson);
            return res.status(201).json({message : 'Le people a étét mis a jour.'})
        }
        
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Route de suppression d'une personne
router.delete('/:id', async (req, res) => {
    try {
        const person = await People.findByIdAndDelete(req.params.id);
        if (person) {
            res.json(person);
        } else {
            res.status(404).json({ error: 'People not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete person' });
    }
});

module.exports = router;
