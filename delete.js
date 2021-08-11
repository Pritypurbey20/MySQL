var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM mytable WHERE name = 'John'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });

