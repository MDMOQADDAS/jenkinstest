const express = require("express")
const app = express()

app.listen(80, ()=> console.log("App Successfully Strted at 80"))


app.get("/", (req, res)=>{
    res.sendFile(__dirname +  "/index.html")
})