var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE mytable";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });


//drop table only if the table exits:

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS mytable";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });