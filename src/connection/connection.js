import oracledb from "oracledb";

const connectionDetails = {
    user: "rev",
    password: "123",
    connectString: "103.172.44.99:1521/rs"
};

async function getConnection() {
    let conn;
    try {
        conn = await oracledb.getConnection(connectionDetails);
    } catch (err) {
        console.error(err);
    }
    return conn;
}


async function queryData(conn) {
    let result;
    try {
        result = await conn.execute("SELECT * FROM table_name");
    } catch (err) {
        console.error(err);
    }
    return result;
}

async function closeConnection(conn) {
    try {
        await conn.close();
    } catch (err) {
        console.error(err);
    }
}

async function ExampleComponent() {
    let conn = await getConnection();
    let result = await queryData(conn);
    // use the result as needed
    await closeConnection(conn);
    return <div>{result}</div>;
}


// oracledb.getConnection({
//     user: "rev",
//     password: "123",
//     connectString: "103.172.44.99:1521/rs"
// }, function (err, connection) {
//     if (err) {
//         console.error(err.message);
//         return;
//     }
//     console.log("Connection was successful!");
// });

// connection.execute(
//     "SELECT * FROM test",
//     [],  // bind value for :id
//     function (err, result) {
//         if (err) {
//             console.error(err.message);
//             doRelease(connection);
//             return;
//         }
//         console.log(result.rows);
//         doRelease(connection);
//     });

// function doRelease(connection) {
//     connection.close(
//         function (err) {
//             if (err)
//                 console.error(err.message);
//         });
// }