const express = require("express")
const path = require("path")
const app = express()
const ejs = require("ejs");

// require("./db/conn");
const body_parser = require("body-parser")
// const Register = require("./models/user_register");

const port = process.env.PORT || 5000;

const static_Path = path.join(__dirname, "../public"); // This statement find index page in the public folder by default.
const views_Path = path.join(__dirname, "../templates/views");
const partials_Path = path.join(__dirname, "../templates/partials");

// app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(static_Path));

app.set("view engine", "ejs");
app.set("views", views_Path);

app.get('/',(req,res) =>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})



app.listen(port, () => {
    console.log(`Server is Running at: ${port}`);
  });
  