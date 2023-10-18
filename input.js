const { connect } = require("http2");
// stores the active TCP connection object.
let connection;
// setup interface to handle user input from stdin
const handleUserInput = (data) => {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write('Move: up');
  }
  if (data === 'a') {
    connection.write("Move: left");
  }
  if (data === 's') {
    connection.write("Move: down");
  }
  if (data === 'd') {
    connection.write("Move: right");
  }
  if (data === 'b') {
    connection.write("Say: Better watch out!");
  }
  if (data === 'z') {
    connection.write("Say: I'm logging out!");
  }
  if (data === 'x') {
    connection.write("Say: Last round!");
  }
};
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports =  { setupInput };