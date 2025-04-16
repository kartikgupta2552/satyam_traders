const express = require('express')

const pool = require('../db/mysql')
const result = require('../utils/result')

const router = express.Router()


router.post('/' , (req,res) => {
    const {itemCategoryName} = req.body
    const sql = `INSERT INTO ItemCategory (ItemCategoryName) VALUES ("${itemCategoryName}")`
    pool.query(sql , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.get('/' , (req,res) => {
    const sql = "SELECT ItemCategoryId, ItemCategoryName FROM ItemCategory"
    pool.query(sql , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.put('/' , (req,res) => {
    const {itemCategoryId, itemCategoryName} = req.body
    const sql = `UPDATE ItemCategory SET ItemCategoryName = ? WHERE ItemCategoryId = ?`
    pool.query(sql , [itemCategoryName , itemCategoryId] , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

router.delete('/:id' , (req,res) => {
    const itemCategoryId = req.params.id
    const sql = `DELETE FROM ItemCategory WHERE ItemCategoryId = ${itemCategoryId}`
    pool.query(sql , (error,data) => {
        res.send(result.createResult(error,data))
    })
})

module.exports = router