var express = require('express')
var app = express()

//    console.log("Ayush")

app.get("/", function (req, res) {
    res.send("Hello, Welcome to my Website")
})

app.get("/about", (req, res) => {
    res.send("Hello, my name is Masood Ahmad")
})

app.get("/profile", (req, res) => {
    res.send("I'm working at EKCS, India")
})


app.listen(3000, function () {
    console.log("Server is running on PORT 3000")
})