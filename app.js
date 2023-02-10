const express = require("express")
const path = require("path")
const body_parser = require("body-parser")
const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use('/',(req,res) =>{
    res.render('index.ejs',{})
})
app.listen(5000);