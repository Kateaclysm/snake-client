const net = require("net");
const { stdin } = require("process");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: `localhost`,
    port: 50541
  });
  conn.on('connect', () => {
    console.log("Connection established!");
  })
  conn.on("data", (data) => {
    console.log(data);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  return conn;
};
console.log("Connecting ...");
connect();