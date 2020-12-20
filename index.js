const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server Up and running"));
app.set("view engine", "ejs");
app.use(express.static("static"));

app.get('/', (req, res) => {
    res.render('landing.ejs');
});

app.get('/buildings', (req, res) => {
    res.render('buildings.ejs');
})