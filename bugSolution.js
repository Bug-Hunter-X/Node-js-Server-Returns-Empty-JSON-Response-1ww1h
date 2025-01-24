const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  const responseData = {
    message: 'Hello from the server!',
    data: {
      name: 'John Doe',
      age: 30
    }
  };
  response.end(JSON.stringify(responseData));
};

const server = http.createServer(requestListener);
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});