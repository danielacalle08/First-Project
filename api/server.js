var express = require('express'); /*Es un framework de Node y es la libreria que sirve 
para la escritura de manejadores de petenciones HTTP. 
Permite colocar middlewares para responder a peticiones HTTP*/

var moment = require('moment-timezone');
var app = express()

app.get('/health', function(req, res) {
    var response = [{response : 'Working'}, {code: '200'}]
    console.log(response)
    res.json(response);
});

app.get('/date', function(req, res) {
    var date = new Date()
    var dateMoment = moment(date)
    var response = dateMoment.tz('America/Bogota').format()
    console.log(response)
    res.json(response)
});

app.listen(8080);