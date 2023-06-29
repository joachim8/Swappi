const { VirtualType } = require('mongoose');

const getModel = (modelName) => {
    // R�cup�re le mod�le appropri� en fonction du param�tre modelName
    switch (modelName) {
        case 'People':
            return require('../database/peoples');
        case 'Films':
            return require('../database/films');
        case 'Planets':
            return require('../database/planets');
        case 'Species':
            return require('../database/species');
        case 'Starships':
            return require('../database/starships');
        case 'Vehicules':
            return require('../database/vehicules');

        default:
            throw new Error(`Invalid model name: ${modelName}`);
    }
};

//   Fonction de contr�leur g�n�rique pour g�rer les op�rations Create
const handleC = (modelName) => {
    const Model = getModel(modelName);

    return {
        create: async (req, res) => {
            try {
                // R�cup�re le dernier �l�ment de la collection + son pk + la date actuelle + le nom du mod�le
                const lastItem = await Model.findOne({}, {}, { sort: { pk: -1 } });
                const lastPk = lastItem ? lastItem.pk : 0;
                const currentDate = new Date().toISOString();
                var lowercaseModelName = null
                // Reasons for this switch:
                // 1. The model name is not always the same as the collection name
                // 2. The model name is not always capitalized
                if (modelName == 'Vehicule') {
                    lowercaseModelName = 'vehicle';
                }
                else {
                    lowercaseModelName = modelName.toLowerCase();
                }

                // Ajout de champs suppl�mentaires au corps de la requ�te
                const newItem = {
                    ...req.body,
                    pk: lastPk + 1,
                    model: `resources.${lowercaseModelName}`,
                    created: currentDate,
                    edited: currentDate
                };

                const item = await Model.create(newItem);
                res.status(201).json(item);
            } catch (error) {
                res.status(500).json({ error: `Failed to create ${modelName}`, message: error.message });
            }
        }
    }
}