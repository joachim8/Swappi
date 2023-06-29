const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 3000;

// Connexion � MongoDB
mongoose.connect('mongodb+srv://joachim:Passw0rd@cluster0.er0q1ui.mongodb.net/swapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// V�rification de la connexion � MongoDB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion � MongoDB'));
db.once('open', () => {
    console.log('Connect� � MongoDB');
});

// Middleware pour parser les requ�tes en JSON
app.use(express.json());

// Routes
const peopleRouter = require('./Routes/peopleRoutes');
const planetsRouter = require('./Routes/planetsRoutes');
const filmsRouter = require('./Routes/filmsRoute');
const vehicleRouter = require('./Routes/vehiclesRoutes');
const starshipsRouter = require('./Routes/starshipsRoutes');
const speciesRouter = require('./Routes/speciesRoutes');

app.use('/api/people', peopleRouter);
app.use('/api/planets', planetsRouter);
app.use('/api/films', filmsRouter);
app.use('/api/vehicle', vehicleRouter);
app.use('/api/starships', starshipsRouter);
app.use('/api/species', speciesRouter);

// Documentation Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Lancement du serveur
app.listen(port, () => {
    console.log(`Serveur d�marr� sur le port ${port}`);
});
