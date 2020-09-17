const express = require('express');
const { route } = require('../../app');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Products were fetched'
    })
})


router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Products were created'
    })
})

router.get('/:productID', (req, res, next) => {
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

router.patch('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product'
    })
})


router.delete('/:productID', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
})
module.exports = router
