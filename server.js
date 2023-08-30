const http = require("http");
const write = require("./writeToFile");
const myServer = http.createServer(write);
myServer.listen(4000);
