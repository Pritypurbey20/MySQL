var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database: "mydb"
});



con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM mytable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[2].address);
  });
});




//The Fields Object
// The third parameter of the callback function is an array containing information about each field in the result.


// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM mytable", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });
