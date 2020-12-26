require('dotenv').config();
const express = require("express");
const app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.API_USERNAME}:${process.env.API_KEY}@bread-basket.lfwrb.mongodb.net/${process.env.API_APPNAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(3000, () => console.log("Server Up and running"));
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get('/', (req, res) => {
    res.render('landing.ejs');
});

// app.get('/buildings', (req, res) => {
//     res.render('buildings.ejs');
// });

client.connect(err => {
    const collection = client.db("main").collection("buildings");

    // app.listen(3000, () => console.log("Server Up and running"));

    app.get('/buildings', (req, res) => {
        collection.find().toArray((err, results) => {
            if(err) return console.log("Error: " + err);
            res.render('buildings.ejs', {building: results});
        });
    });
})