const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello from the home page");
  } else if (req.url === "/about") {
    res.end("This is the second route");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(3000, () => console.log("http://localhost:3000"));