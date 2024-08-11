const express = require("express");
const app = express();
const PORT = 3000;
const email = 'support@pwskills.com'

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get('/',(req,res)=>{
    res.status(200).json({message : "I am home page"})
})

app.get('/about',(req,res)=>{
    res.status(200).json({message : "I am about page"})
})

app.get('/contact',(req,res)=>{
    res.status(200).json({email})
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})