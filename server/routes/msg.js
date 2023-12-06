const express = require("express");
 

// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const msgRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

msgRoutes.route("/msgs").get(async function (req, res) {
    try {
      await dbo.connectToServer();
      const db_connect = dbo.getDb();
  
      if (!db_connect) {
        console.error("MongoDB connection not established.");
        return res.status(500).json({ error: "Internal Server Error" });
      }
  
      const result = await db_connect.collection("msgboard").find({}).toArray();
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

//post new message
msgRoutes.route("/msgs/add").post(function (req, res) {
    let db_connect = dbo.getDb();
    let myobj = {
        text: req.body.text,
        timestamp: new Date(),
    };
    db_connect.collection("msgboard").insertOne(myobj, function (err, res) {
        if (err) throw err;
        response.json(res);
    });
});

module.exports = msgRoutes;
