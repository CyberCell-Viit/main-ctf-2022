const express =  require("express");
const path = require("path");

const app = express();
app.get("/*", (req ,res) => {
    res.sendFile(path.resolve(__dirname ,"frontend", "index.html"));
});

app.listen(8080, (req, res) => {
    console.log("server up and running");
} );

