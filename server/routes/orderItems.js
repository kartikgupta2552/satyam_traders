const express = require('express')

const pool = require('../db/mysql')
const result = require('../utils/result')

const router = express.Router()


router.post('/' , (req,res) => {
    const orderItems = req.body
    
    const sql = `INSERT INTO OrderItems (OrderId, ItemId, Quantity) VALUES ?`
    const allItems = orderItems.map((item) => [item.orderId, item.itemId, item.quantity])
    pool.query(sql , [allItems] , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.get('/:orderId' , (req,res) => {
    const orderId = req.params.orderId
    const sql = `SELECT OrderItemId, ItemId, Quantity FROM OrderItems WHERE OrderId = ${orderId}`
    pool.query(sql , (error,data) => {
        res.send(result.createResult(error,data))
    })
})


module.exports = router