const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')


const routes = Router()

/******Métodos HTTP: GET, POST, PUT, DELETE
 * **Tipos de parâmetros:
 * Query Params: req,query (Filtros, ordenação, paginação, list..)
 * Route Params: req.params (update, delete,) Ex: /users/:id
 * Body: req.body (criação, acesso ao corpo do registo a criar/alterar)
 */

routes.post('/devs', DevController.store)
routes.get('/devs', DevController.index)

routes.get('/search', SearchController.index)

module.exports = routes;