const http = require("http");
const myServer = http.createServer((req, res) => {
  console.log(req.url)
  res.setHeader('Content-Type' , 'text/html');
  res.write('<html><body><h2>This is first response message for a server</h2></body></html>')
  res.end()
  process.exit()
  
});
myServer.listen(4000);

