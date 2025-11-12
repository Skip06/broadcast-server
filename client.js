const WebSocket = require('ws');                   
const readline = require('readline');                // to let user input message through terminal

const ws = new WebSocket('ws://localhost:8080');     

const rl = readline.createInterface({                
  input: process.stdin,
  output: process.stdout,
  prompt: 'You: '
});

ws.on('open', () => {                                
  console.log('Connected to server');
  rl.prompt();                                    // to let user know they can start typing You:
});

ws.on('message', (message) => {                      
  console.log(`broadnasts: ${message}`);
  console.log(" ")
  rl.prompt();
});

rl.on('line', (line) => {                            // clicking enter after typing message
  if (line.trim() === 'exit') {
    ws.close();
    process.exit(0);
  }
  ws.send(line);
  rl.prompt();
});

ws.on('close', () => {                               
  console.log('Disconnected');
  process.exit(0);
});