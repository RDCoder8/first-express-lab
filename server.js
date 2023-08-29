const express = require("express")

const app = express()

app.get('/greeting', (req, res) => {
    res.send("<h1>What's good?</h1>")
})

app.get('/greeting/:name', (req, res) => {
  res.send("<h1>What's good " + req.params.name + "?</h1>");
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send("<h1>Your tip is: " + (req.params.total * (req.params.tipPercentage/100))  + "</h1>")
})

app.get('/magic/:question', (req, res) => {
    const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

    res.send("<h1>" + req.params.question + "?<br>" + answers[Math.floor(Math.random() * answers.length)] +"</h1>")
})

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})