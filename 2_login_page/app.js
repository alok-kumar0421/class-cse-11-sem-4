const express=require('express')
const app=express()


app.get("/",(req,res)=>{
    res.render("login.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

const port=3000
app.listen(port,()=>{
    console.log(`app is listen at ${port}`)
});