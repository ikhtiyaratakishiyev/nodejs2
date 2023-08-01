const express = require('express')

const app = express()
// backend den gelen string datani json cevirmek ucun
app.use(express.json()) 
 
const mongoose = require('mongoose')

mongoose
// route folderindeki products faylini import etmek ucun
.connect('mongodb+srv://ikhtiyaratakishiyev:12414313@ikhtiyar.czaqbv1.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{console.log("Mongodb is Connected")})
.catch(()=>{console.log(' Mongodb is not connected')})
app.get('/',(req,res)=>{
  res.json({message:'I-> Get Metodu ishledi'})
})
// route folderindeki products faylini import etmek ucun


app.listen(3000, ()=>{
    console.log("I-> Server is running")
})

const productsRoutes = require('./routes/products')

const usersRoutes = require('./routes/users')

app.use('/products', productsRoutes )

app.use('/users',usersRoutes)