const route = require('express').Router()
const product = require('../db').product

// this request will extract 10 product from database store it in products
route.get('/', (res, req) => {

    product.findAll()
        .then((products) => {
            res.send(products)
        })
        .catch((err) => {
            res.send({
                error: "Could not retreive products"
            })
        })

})

// post request only accesed by server side for trial on postman only 
route.post('/', (req, res) => {

    if (isNaN(req.body.price)) {
        return res.send({
            error: "Price is not valid number"
        })
    }
    if (req.body.productID == null) {
        return res.send({
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
            productID: pasrseInt(req.body.ID),
            productName: req.body.name,
            supplier: req.body.supplier,
            price: parseFloat(req.body.price),
            categoryID: parseInt(req.body.categoryID),
            productDiscription: req.body.discription,
            supplierID: parseInt(req.body.supplierID),
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
            res.status(501).send({
                error: "Error adding product"
            })
        })
})

exports = module.exports = { route }