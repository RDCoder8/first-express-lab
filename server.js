const express = require("express")

const app = express()

app.get('/greeting', (req, res) => {
    res.send("<h1>What's good?</h1>")
})

app.get('/greeting/:name', (req, res) => {
  res.send("<h1>What's good " + req.params.name + "?</h1>");
});

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})