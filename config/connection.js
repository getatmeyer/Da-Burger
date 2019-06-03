// Set up MySQL connection.
var mysql = require("mysql");
var port = process.env.PORT || 3000;
          
if (process.env.JAWSDB_URL) {
connection = 
  mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "UWbootcamp20!",
  database: "burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
