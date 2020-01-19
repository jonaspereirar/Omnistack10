const Dev = require('../models/Dev');
const parseStringAsArrar = require('../utils/parseStringAsArray')

        // Buscar todos devs num raio 10Km
        //Filtrar por tecnologias
module.exports = {
    async index(req, response) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArrar(techs)

    const devs = await Dev.find({ 
        techs: {
            $in: techsArray,
        },
    location: {
        $near: {
            $geometry: {
                type: 'Point',
                coordinates: [longitude, latitude],
            },
            $maxDistance: 10000,
        }

    }})
        return response.json({ devs })
    }
}