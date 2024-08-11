const express = require("express");
const app = express();
const PORT = 3000;
let counter = 0;

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get('/',(req,res)=>{
    res.status(200).json({counter})
})

app.get('/increment',(req,res)=>{
    counter++
    res.status(200).json({counter})
})

app.get('/decrement',(req,res)=>{
    counter--
    res.status(200).json({counter})
})

app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`)
})