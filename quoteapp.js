const express = require("express");
const app = express();
const https = require("https");
const path = require('path');
const bodyParser = require("body-parser");
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

global.document = new JSDOM("./quote.html").window.document;

app.get("/", function (req, res){
    res.sendFile(__dirname + "/html/quote.html");
});


app.post("/", function (req, res){
    console.log("Post Recieved.");
    const url = "https://www.abbreviations.com/services/v2/quotes.php?uid=9829&tokenid=qs7vfrrLDmDvTjIn&searchtype=AUTHOR&query=Rabindranath+Tagore&format=json";
    console.log("jb");
    // function genmore() {
        https.get(url, function (response) {    
            x=Math.floor((Math.random() * 15) + 1);
            console.log('elo');
            response.on("data", function (data) {
                const quotedata = JSON.parse(data);
                var quote = quotedata.result[x].quote;
                var author = quotedata.result[x].author;

                console.log(quote);
                console.log(author);

            
                document.getElementsByClassName("actual-quote").innerTEXT=quote;
                document.getElementById("author-name-p").innerTEXT=author;

            })
        })
    // }
});

app.listen(3000, function () {
    console.log("server running at 3000");
    console.log(__dirname)
})

// const url = "http://quotes.rest/qod.json?category=inspire";
// function genmore() {
//     console.log("2quote");
//     console.log("2author");
//     https.get(url, function (response) {
//         console.log("3quote");
//         console.log("3author");
//         response.on("data", function (data) {
//             const quotedata = JSON.parse(data);
//             var quote = quotedata.contents.quotes[0].quote;
//             var author = quotedata.contents.quotes[0].author;
//             document.getElementsByClassName("actual-quote") = quote;
//             document.getElementById("author-name-p") = author;
//             console.log(quote);
//             console.log(author);
//         })
//     })
// }