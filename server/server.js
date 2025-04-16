const express = require('express')
const cors = require('cors')

const itemCategoryRouter = require('./routes/itemCategory')
const itemRouter = require('./routes/item')
const orderRouter = require('./routes/order')
const orderItemsRouter = require('./routes/orderItems')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/itemCategory',itemCategoryRouter)
app.use('/item',itemRouter)
app.use('/order',orderRouter)
app.use('/orderItems',orderItemsRouter)


app.listen(4000,'localhost',()=>{
    console.log("server started")
})