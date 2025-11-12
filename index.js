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

