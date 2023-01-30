
// const oracledb = require('oracledb');
// oracledb.getConnection({
//   user: "rev",
//   password: "123",
//   connectString: "103.172.44.99:1521/rs"
// }, function(err, connection) {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log("Connection was successful!");
// });

// connection.execute(
//     "SELECT * FROM test",
//     [],  // bind value for :id
//     function(err, result) {
//       if (err) {
//         console.error(err.message);
//         doRelease(connection);
//         return;
//       }
//       console.log(result.rows);
//       doRelease(connection);
//     });
  
//   function doRelease(connection) {
//     connection.close(
//       function(err) {
//         if (err)
//           console.error(err.message);
//       });
//   }