const express = require("express");
const app = express();
const https = require("https");
const path = require('path');
const bodyparser = require("body-parser");


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/quote.html");
});


// app.post("/", function (req, res) {
//     const url = "http://quotes.rest/qod.json?category=inspire";
//     function genmore() {
//         https.get(url, function (response) {
//             response.on("data", function (data) {
//                 const quotedata = JSON.parse(data);
//                 var quote = quotedata.contents.quotes[0].quote;
//                 var author = quotedata.contents.quotes[0].author;
//                 document.getElementsByClassName("actual-quote")=quote;
//                 document.getElementById("author-name-p")=author;
//                 console.log(quote);
//                 console.log(author);
//             })
//         })
//     }
// });

app.listen(3000, function () {
    console.log("server running at 3000");
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