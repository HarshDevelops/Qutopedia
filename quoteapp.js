const express = require("express");
const app = express();
const https = require("https");
const path = require('path');
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));


app.get("/", function (req, res){
    res.sendFile(__dirname + "/html/quote.html");
});


app.post("/", function (req, res){
    console.log("Post Recieved.");
    const url = "https://www.abbreviations.com/services/v2/quotes.php?uid=9829&tokenid=qs7vfrrLDmDvTjIn&searchtype=AUTHOR&query=Rabindranath+Tagore&format=json";
        https.get(url, function (response) {    
            x=Math.floor((Math.random() * 15) + 1);
            console.log('elo');
            response.on("data", function (data) {
                const quotedata = JSON.parse(data);
                var quote = quotedata.result[x].quote;
                var author = quotedata.result[x].author;
                console.log(quote);
                console.log(author);
                res.render("list", {quote_here:quote, author_here: author});
            })
        })
});

app.listen(3000, function () {
    console.log("server running at 3000");
    console.log(__dirname)
})
