var connect = require('connect');
var url = require('url');
var proxy = require('proxy-middleware');

var app = connect();
app.use('/app/checkout-client', proxy(url.parse('http://localhost:3030')));
app.use('/', proxy(url.parse('http://localhost:3000')));


app.listen(5000);

console.log('Listening on http://localhost:5000/');
