# SWAPI API

API pour accéder aux données de SWAPI (Star Wars API) et les stocker dans MongoDB.

## Endpoints

### People

- `POST /api/people` - Crée une nouvelle personne.
- `GET /api/people` - Récupère toutes les personnes.
- `GET /api/people/{id}` - Récupère une personne par ID.
# SWAPI API

API pour accéder aux données de SWAPI (Star Wars API) et les stocker dans MongoDB.

## Endpoints

### People

- `POST /api/people` - Crée une nouvelle personne.
- `GET /api/people` - Récupère toutes les personnes.
- `GET /api/people/{id}` - Récupère une personne par ID.
- `PUT /api/people/{id}` - Met à jour une personne par ID.
- `DELETE /api/people/{id}` - Supprime une personne par ID.

### Planets, Films, Species, Vehicles, Starships

(À implémenter de manière similaire à la ressource People)

## Authentification

L'API utilise JSON Web Tokens (JWT) pour l'authentification. Les routes nécessitant une authentification doivent inclure un en-tête `Authorization` avec la valeur `Bearer {token}`.

## Richardson Maturity Model

Le modèle de Richardson est un modèle qui classe les API REST en quatre niveaux selon leur maturité en termes de conception et d'implémentation :

1. Niveau 0 - Les services web sont exposés via des URL uniques sans utiliser les verbes HTTP appropriés.
2. Niveau 1 - Les verbes HTTP appropriés sont utilisés, mais les ressources ne sont pas correctement identifiées.
3. Niveau 2 - Les ressources sont correctement identifiées, et les verbes HTTP appropriés sont utilisés.
4. Niveau 3 - L'API utilise HATEOAS (Hypertext As The Engine Of Application State) pour fournir des liens permettant à l'utilisateur de naviguer à travers l'API.

Dans ce projet, nous avons atteint le niveau 2 du modèle de Richardson. Les ressources sont correctement identifiées et les verbes HTTP appropriés sont utilisés pour effectuer des opérations CRUD.

Pour atteindre le niveau 3, nous pourrion ajouter des liens dans les réponses de l'API pour permettre à l'utilisateur de naviguer à travers les ressources de manière dynamique.

## Installation et exécution

1. Assurez-vous d'avoir Node.js et MongoDB installés sur votre machine.
2. Clonez ce dépôt : `git clone https://github.com/votre-utilisateur/swapi-api.git`
3. Accédez au répertoire du projet : `cd swapi-api`
4. Installez les dépendances : `npm install`
5. Démarrez le serveur : `node index.js`
6. L'API sera accessible à l'adresse : `http://localhost:3000/api`

## Documentation Swagger

La documentation Swagger est disponible à l'adresse : `http://localhost:3000/api/docs`

