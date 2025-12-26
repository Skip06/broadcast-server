const args = process.argv.slice(2);
if(args[0] == "start" ){
    console.log("starting the broadcast server ");
    require("./server.js");   //imports or loads server.js (present in nodejs)
}
else if (args[0] == "connect"){
    console.log("connecting to broadcast server")
    require("./client.js")
}
else{
    console.log("invalid command");
    process.exit(1)
}
//const ws = new WebSocket('') is used on the client-side (e.g., in a browser or a client-side JavaScript application) to establish a connection to a WebSocket server (1:12:19). This ws object represents the client's connection to the server.

//wss = new WebSocketServer('') is used on the server-side (e.g., in a Node.js application) to create and manage WebSocket connections (0:52:40). This wss object is the WebSocket server itself, listening for incoming client connections.
