const Joi = require('@hapi/joi')

const productsValidation = (data)=>{

    const productSchema = Joi.object({
        vendor: Joi.string().min(2).max(20).required(),
        model:  Joi.string().min(2).max(20).required(),
        color:  Joi.string().min(3).max(20).required(),
        price:  Joi.number().min(1).max(10000).required()
    })
    return productSchema(data)
    
}


module.exports.productsValidation = productsValidation