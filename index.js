const express = require("express");
const app = express();

app.listen(3000, () => console.log("Server Up and running"));
app.set("view engine", "ejs");
app.use("/static", express.static("public"))

app.get('/', (req, res) => {
    res.render('landing.ejs');
});