var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url  ='mongodb+srv://kinoadmin:1234KinoLeonNico5678@cluster0.utbum.mongodb.net/Kinoticketing-DB?retryWrites=true&w=majority';

const db_name = "Kinoticketing-DB"
const db_collection = "Persons"
/*
// CONNECT TO MONGO DB
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_name);
    var myobj = { first_name: "Nicolas", last_name: "Schneider"};
    dbo.collection(db_collection).insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
//*/

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db(db_name);
    var query = { address: "Park Lane 38" };
    dbo.collection(db_collection).find({},{roll:1}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});