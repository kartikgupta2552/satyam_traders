const express = require('express')

const pool = require('../db/mysql')
const result = require('../utils/result')

const router = express.Router()


// router.post('/', (req, res) => {
//     const items = req.body

//     if (!Array.isArray(items) || items.length === 0) {
//         return res.status(400).send(result.createErrorResult('Invalid input: items should be a non-empty array.'));
//     }

//     const values = items.map(item => [item.itemName, item.itemPrice, item.itemCategoryId]);

//     const sql = `INSERT INTO Items (ItemName, ItemPrice, ItemCategoryId) VALUES ?`;
//     pool.query(sql, [values], (error, data) => {
//         res.send(result.createResult(error, data))
//     });
// })

router.post('/', (req, res) => {
    const { itemName, itemPrice, itemCategoryId } = req.body
    const sql = `INSERT INTO Items (ItemName, ItemPrice, ItemCategoryId) VALUES (?, ?, ?)`
    pool.query(sql, [itemName, itemPrice, itemCategoryId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.get('/', (req, res) => {
    const sql = `SELECT Items.ItemId, Items.ItemName, Items.ItemPrice, ItemCategory.ItemCategoryName 
    FROM Items,ItemCategory WHERE Items.ItemCategoryId = ItemCategory.ItemCategoryId`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

// search items by category
router.get('/category/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId
    const sql = `SELECT Items.ItemId, Items.ItemName, Items.ItemPrice, ItemCategory.ItemCategoryName 
    FROM Items,ItemCategory WHERE Items.ItemCategoryId = ItemCategory.ItemCategoryId AND Items.ItemCategoryId = ${categoryId}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.put('/', (req, res) => {
    const { itemId, itemName, itemPrice, itemCategoryId } = req.body
    const sql = `UPDATE Items SET ItemName = ?, ItemPrice = ?, ItemCategoryId = ? WHERE ItemId = ?`
    pool.query(sql, [itemName, itemPrice, itemCategoryId, itemId], (error, data) => {
        res.send(result.createResult(error, data))
    })
})

router.delete('/:id', (req, res) => {
    const itemId = req.params.id
    const sql = `DELETE FROM Items WHERE ItemId = ${itemId}`
    pool.query(sql, (error, data) => {
        res.send(result.createResult(error, data))
    })
})

module.exports = router