const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authMiddleware = require('./middlewares/auth');
const peopleRoutes = require('./routes/people');

const app = express();
const port = 3000;

// Connexion à MongoDB
mongoose.connect('mongodb+srv://joachim:Passw0rd@cluster0.er0q1ui.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDb');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

// Middleware pour le traitement du corps des requêtes en JSON
app.use(express.json());

//// Middleware d'authentification
//app.use('/api', authMiddleware);

// Routes pour les personnes (people)
app.use('/api/people', peopleRoutes);

// Documentation Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));






// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});