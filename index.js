const express = require ('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://radar:radar@cluster0-mgyth.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
/******Métodos HTTP: GET, POST, PUT, DELETE
 * **Tipos de parâmetros:
 * Query Params: req,query (Filtros, ordenação, paginação, list..)
 * Route Params: req.params (update, delete,) Ex: /users/:id
 * Body: req.body (criação, acesso ao corpo do registo a criar/alterar)
 */

 /**MongoDB (Não-relacional)*/
app.get('/users', (req, res) => {
    console.log(req.query)
return res.json({ messenger: 'Hellow Horld'})
})

app.listen(3333)