const express = require("express")

const body_parser = require("body-parser")
const app = express()
app.use(express.static(__dirname+'\\public'))
app.use('/',(req,res) =>{
    res.render('index.ejs',{})
})

app.listen(3000);