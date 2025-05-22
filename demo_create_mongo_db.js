const mongo = require("mongodb");
const MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://femimane1:4co2GKj3J5oOyFCi@cluster0.equeas6.mongodb.net/";
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created");
  db.close();
});
