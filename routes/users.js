const router = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

// jwt 
// jwt.sign shifreleyir, bizim alqoritma ile
// jwt.verify  bizim alqoritma ile shifreni acir
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if (!user) return res.status(404).json({
            message: "Username or passsword is wrong"
        })

        const checkPassword = user.password === req.body.password

        if (!checkPassword) return res.status(404).json({
            message: "Username or passsword is wrong"
        })
        const token = jwt.sign({_id: user._id}, '12343')
        res.status(200).json(token)
    } catch {
        return res.status(404).json({
            message: "Username or passsword is wrong"
        })
    }
})

router.post('/register', async (req, res) => {

    try {
        const newUser = new User({

            name: req.body.name,
            surname: req.body.surname,
            username: req.body.username,
            password: req.body.password,
            cvv: req.body.cvv,
            wallet: req.body.wallet
        })
        const saveProduct = await newUser.save()
        res.status(200).json({
            mes: "User added successsfuly"
        })
    } catch {
        res.status(400).json({
            mes: "User  not  added "
        })
    }


})






module.exports = router