const express = require ('express');

const app = express();

app.get('/', (req, Response) => {
    return Response.json('Hello World')
    //return res.json({ messenger: 'Hellow Horld'})
})

app.listen(3333)