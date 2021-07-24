const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
class chat{
    static chatApp =async (req,res)=>{
        res.sendFile(__dirname + '/chat.html');
        io.on('connection', (socket) => {
          socket.on('chat message', (msg) => {
            io.emit('chat message', msg);
          });
        });
        server.listen(5000, () => {
          console.log('listening on *:3000server');
        });
    }
}
module.exports=chat