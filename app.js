const express = require("express")
const path = require("path")
const body_parser = require("body-parser")
const app = express()
app.use(express.static(path.join(__dirname,'public')))

app.use('/login',(req,res)=>{
    res.render('login.ejs',{})
})
app.use('/',(req,res) =>{
    res.render('index.ejs',{})
})
app.listen(5000,()=>{
    console.log("Server is listening at 5000")
});