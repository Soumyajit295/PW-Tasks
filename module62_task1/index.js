const express = require("express");

const app = express();

const PORT = 3000;

const products = {
  men: [
    { id: 1, name: "Men's T-Shirt", price: "19.99" },
    { id: 2, name: "Men's Jeans", price: "39.99" },
    { id: 3, name: "Men's Jacket", price: "59.99" },
    { id: 4, name: "Men's Sneakers", price: "49.99" },
    { id: 5, name: "Men's Sweatshirt", price: "29.99" },
    { id: 6, name: "Men's Shorts", price: "24.99" },
    { id: 7, name: "Men's Suit", price: "99.99" },
    { id: 8, name: "Men's Hoodie", price: "34.99" },
    { id: 9, name: "Men's Belt", price: "14.99" },
    { id: 10, name: "Men's Sunglasses", price: "21.99" },
  ],
  women: [
    { id: 1, name: "Women's Dress", price: "49.99" },
    { id: 2, name: "Women's Skirt", price: "29.99" },
    { id: 3, name: "Women's Blouse", price: "34.99" },
    { id: 4, name: "Women's Shoes", price: "59.99" },
    { id: 5, name: "Women's Handbag", price: "79.99" },
    { id: 6, name: "Women's Jacket", price: "89.99" },
    { id: 7, name: "Women's Scarf", price: "19.99" },
    { id: 8, name: "Women's Leggings", price: "25.99" },
    { id: 9, name: "Women's Cardigan", price: "39.99" },
    { id: 10, name: "Women's Sunglasses", price: "22.99" },
  ],
};

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
});

app.get('/',(req,res)=>{
    res.status(200).json({message : 'Welcome to Men & Women Dummy Data'})
})

app.get('/men',(req,res)=>{
    res.status(200).json(products.men)
})

app.get('/women',(req,res)=>{
    res.status(200).json(products.women)
})

app.use((req,res)=>{
    res.status(404).json({message : 'Page not found'})
})

app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})
