const express = require('express')

const pool = require('../db/mysql')
const result = require('../utils/result')

const router = express.Router()


router.post('/' , (req,res) => {
    const {customerName,customerPhone} = req.body
    const sql = `INSERT INTO Orders (CustomerName,CustomerPhone) VALUES (? , ?)`
    pool.query(sql , [customerName,customerPhone] , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.get('/' , (req,res) => {
    const sql = "SELECT OrderId, CustomerName, CustomerPhone, OrderTime FROM Orders"
    pool.query(sql , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

module.exports = router