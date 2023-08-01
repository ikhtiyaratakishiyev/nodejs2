const router = require('express').Router()

const Product = require('../models/product')
const {productsValidation} = require('../validation/productsValidation')

const jwt = require('jsonwebtoken')





router.get('/', async (req, res) => {
     const allProducts = await Product.find()

     res.status(200).json(allProducts)
})

router.get('/:id', async (req, res) => {
   try{
    const findProduct = await Product.findOne({_id:req.params.id})
    // find product shifrelenmeli
    const token = jwt.sign(findProduct,123)
    res.status(200).json(findProduct)
   }
   catch{
    res.status(400).json({
        message: "Invalid product id "
    })
   }
})


router.delete('/:id', async (req, res) => {
    try{
     const findProduct = await Product.findOneAndDelete({_id:req.params.id})
     res.status(200).json(findProduct)
    }
    catch{
     res.status(400).json({
         message: "Invalid product id "
     })
    }
 })



router.post('/', async (req, res) => {
// mehsulu elave etmemishden qabag hapi joi tetbiq etmek ucun.
//   const {error} =productsValidation(req.body)
//   if(error){
//     return res.send(error.details[0].message)
//   }
    
    try {
        const newProduct = await new Product({
            vendor: req.body.vendor,
            model: req.body.model,
            color: req.body.color,
            price: req.body.price
        })

        const savedProduct = await newProduct.save()

        res.status(200).json({
            message: "Product added successfuly"
        })
    } catch {
        res.status(400).json({
            message: "Product is not added "
        })
    }
})





module.exports = router