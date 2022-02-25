const express =  require("express");
const path = require("path");

const app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use("/static", express.static(path.resolve(__dirname , "frontend" , "static")));


app.get("/*", (req ,res) => {
    res.sendFile(path.resolve(__dirname ,"frontend", "index.html"));
});

app.listen(8080, (req, res) => {
    console.log("server up and running");
} );

