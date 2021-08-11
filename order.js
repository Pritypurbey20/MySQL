var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nav@gur1",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM mytable ORDER BY name DSEC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});


// con.connect(function(err){
//     if (err) throw err;
//     con.query("SELECT * FROM mytable ORDER BY name ",function(err,result){
//         if (err) throw err;
//         console.log(result)
//     });
// });

