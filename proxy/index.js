var http = require('http'),
  httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function (req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  if (req.url.indexOf('/app/checkout-client/') === 0) {
    req.url = req.url.replace('/app/checkout-client/', '');
    proxy.web(req, res, {target: 'http://127.0.0.1:3030'});
  } else if (req.url === '/app/checkout-server/checkout.html') {
    proxy.web(req, res, {target: 'http://127.0.0.1:5050'});
  } else {
    proxy.web(req, res, {target: 'http://127.0.0.1:3000'});
  }
});

console.log("listening on port 5000");
server.listen(5000);
