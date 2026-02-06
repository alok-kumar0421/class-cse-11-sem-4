const express=require('express')
const app=express()


app.get("/",(req,res)=>{
    res.render("login.ejs");
})
const port=3000
app.listen(port,()=>{
    console.log(`app is listen at ${port}`)
})