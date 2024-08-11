const express = require("express");
const app = express();
const PORT = 3000

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get('/random',(req,res)=>{
    let randomNumber = Math.floor(Math.random()*100)
    res.status(200).json({randomNumber})
})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})

