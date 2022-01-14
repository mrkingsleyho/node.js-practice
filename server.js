//create HTTP module
const http = require('http');
const fs = require('fs');

//create server
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');
//routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    default:
      path += '404.html';
      break;  
  }
//read html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      // res.end();
      res.end(data);
    }
  });

});
//listening for requests
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});