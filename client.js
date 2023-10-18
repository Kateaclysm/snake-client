const net = require("net");
const { stdin, send } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Connection established!");
    conn.write("Name: KTE");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};


module.exports = { connect }