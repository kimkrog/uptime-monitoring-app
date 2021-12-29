// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all requests with a string
const server = http.createServer(function(req, res) {

  // Get URL and parse it
  const parsedUrl = url.parse(req.url, true);

  // Get path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')

  // Get the query string as an object
  const queryStringObject = parsedUrl.query;

  // Get HTTP Method
  const method = req.method.toLowerCase();

  // Send response
  res.end('Hello world \n');

  // Log request path
  console.log('Request received on path: '+trimmedPath+ ' with method: '+method+' and with these query string parameters', queryStringObject);

});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
  console.log("Server listening on port 3000");
});
