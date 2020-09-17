const express = require('express');
const { route } = require('../../app');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Orders were fetched'
    })
})


router.post('/', (req, res, next) => {
    const order = {
        productID: req.body.productID,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'Orders were created',
        order: order
    })
})

router.get('/:orderID', (req, res, next) => {
    const id = req.params.productID;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

router.patch('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated order'
    })
})


router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted order'
    })
})
module.exports = router
