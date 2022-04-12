const mysql = require("mysql");

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "111111",
    database : "usedproduct",
    dateStrings : "date"
});

module.exports = db;


// const mysql = require("mysql");

// const db = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "111111",
//     database : "usedproduct",
//     dateStrings : "date"
// });
// db.connect();

// module.exports = db;