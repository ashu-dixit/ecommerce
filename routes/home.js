const route = require('express').Router()
const product = require('../db').product

// this request will extract 10 product from database store it in products
route.get('/', (req, res) => {

    product.findAll({
            limit: 10
        })
        .then((products) => {
            res.status(200).send(products)
        })
        .catch((err) => {
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
            productID: parseInt(req.body.productID),
            productName: req.body.productName,
            supplier: req.body.supplier,
            price: parseFloat(req.body.price),
            categoryID: parseInt(req.body.categoryID),
            productDiscription: req.body.productDiscription,
            supplierID: parseInt(req.body.supplierID),
            stock: parseInt(req.body.stock),
            size: req.body.size,
            colour: req.body.colour,
            Discount: parseFloat(req.body.discount)

        })
        .then((product) => {
            res.status(201).send(product)
            console.log("This product has been added")
        })
        // .catch((error) => {
        //     res.status(501).send({
        //         error: "Error adding product"
        //     })
        // })
})

exports = module.exports = { route }