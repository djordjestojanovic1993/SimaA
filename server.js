const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const port = 3000;
server.listen(port);

server.once("listening", ()=>{
    console.log("Server je pokrenut na portu 3000");
})