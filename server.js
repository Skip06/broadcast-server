// we need http to intialize the server then ws can use it 
const http = require("http");
const WebSocket = require("ws");
const server = http.createServer();
const wss = new WebSocket.Server({server});//By passing the existing HTTP server instance, the WebSocket server knows which underlying network connection and port it should use to listen for and handle the initial WebSocket Handshak

const clients = new Set();

wss.on("connection", (ws) => {
    clients.add(ws);
    console.log("new client connected");
    
    ws.on("message", (message) => {
        console.log("received:" + message);
        //broadcast to all 
        for(let client of clients){
            if(client.readyState === WebSocket.OPEN){
                client.send(message);
            }
          } 
    });

    ws.on("close", () =>{
        clients.delete(ws);
        console.log("client disconnected");
    })
})
server.listen(8080, () => {
    console.log("WebSocket server is listening on ws://localhost:8080");
})
