const route = require('express').Router()
const product = require('../db').product

const authCheck = (req,res,next) => {
    if(req.user){
        next()
    }else{
        res.redirect('/login.html')
    }
}
// this request will extract 10 product from database store it in products
route.get('/',authCheck, (req, res) => {

    product.findAll({
            limit: 10
        })
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send({
                error: "Could not retreive products"
            })
        })

})

// post request only accesed by server side for trial on postman only 
route.post('/', (req, res) => {

    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    if (req.body.productID == null) {
        return res.status(403).send({
            error: "ProductID cannnot be NULL"
        })
    }
    if (req.body.productName == null) {
        return res.status(403).send({
            error: "Product name cannot be empty"
        })
    }
    if (req.body.productDiscription == null) {
        return res.status(403).send({
            error: "Product discription cannot be empty"
        })
    }
    product.create({
            id: parseInt(req.body.id),
            name: req.body.name,
            price: parseFloat(req.body.price),
            categoryid: parseInt(req.body.categoryID),
            discription: req.body.discription,
            supplierid: parseInt(req.body.supplierID),
            stock: parseInt(req.body.stock),
            size: req.body.size,
            colour: req.body.colour,
            discount: parseFloat(req.body.discount)

        })
        .then((product) => {
            res.status(201).send(product)
            console.log("This product has been added")
        })
        .catch((error) => {
            console.log(err)
            res.status(501).send({
                error: "Error adding product"
            })
        })
})

exports = module.exports = { route }