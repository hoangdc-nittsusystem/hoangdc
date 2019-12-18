const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
}
app.post('/', cors(corsOptions), function (request, response) {
    let body = {
        id: 1,
        name: 'Hoang'
    }

    response.json(body)
   
})

app.get('/', cors(corsOptions), function (request, response) {
    let body = {
        id: 1,
        name: 'Hoang'
    }

    response.json(body)
   
})


const port = 3000;
const host = 'localhost';

app.listen(port, function () {
    console.log('CORS-enabled web server listening on port 3000')
})