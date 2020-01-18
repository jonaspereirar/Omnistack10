const { Router } = require('express')
const axios = require('axios');
const Dev = require('./models/Dev')

const routes = Router()

/******Métodos HTTP: GET, POST, PUT, DELETE
 * **Tipos de parâmetros:
 * Query Params: req,query (Filtros, ordenação, paginação, list..)
 * Route Params: req.params (update, delete,) Ex: /users/:id
 * Body: req.body (criação, acesso ao corpo do registo a criar/alterar)
 */

routes.post('/devs', async (req, response) => {
    const { github_username, techs } = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

    let { name = login, avatar_url, bio } = apiResponse.data

    const techsArray = techs.split(',').map(tech => tech.trim())

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })
    return response.json(dev)
})

module.exports = routes;