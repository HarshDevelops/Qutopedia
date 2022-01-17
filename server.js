const express =  require("express");
const app = express();
const https = require("https");
const path = require('path');
const bodyparser = require("body-parser");

app.get("/elo",function(req,res){
    res.sendFile(__dirname+"/html/index.html");
    app.use(express.static('/styles'))
});


app.listen(3000,function(){
    console.log("server running at 3000");
    console.log(__dirname);
    console.log(__dirname+"/html/index.html");
    console.log(__dirname+"/styles/index.css");
})