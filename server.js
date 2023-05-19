const express = require("express");
const app = express()
// const sendMail = require("./sendMail")
const port = process.env.PORT || 7777;



app.get("/port", (req,res)=>{
    try {
        res.status(203).send("Welcome to Node Mailer")
        
    } catch (error) {
        
    }
})

app.get("/sendmail")

app.use(express.json())

app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})