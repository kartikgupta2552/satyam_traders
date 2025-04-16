import React, { useEffect, useState } from 'react'
import { addItem, getItems } from '../services/item'
import { getItemCategories } from '../services/itemCategory'
import { toast } from 'react-toastify'
import { addOrderItem } from '../services/orderItems'

function Home() {

    const [items, setItems] = useState([])
    const [itemCategories, setItemCategories] = useState([])

    let orderItems = {}

    useEffect(() => {
        loadItems()
        loadItemCategories()
    }, [])

    const loadItems = async () => {
        const response = await getItems()

        if (response.status == 'success') {
            setItems(response.data)
        } else {
            console.log(response.error)
        }
    }

    const loadItemCategories = async () => {
        const response = await getItemCategories()

        if (response.status == 'success') {
            setItemCategories(response.data)
        } else {
            console.log(response.error)
        }
    }

    const onPlaceOrderClicked = async () => {
        const trimmedOrder = Object.fromEntries(
            Object.entries(orderItems)
                .map(([key, value]) => [key, value.trim()])
                .filter(([key, value]) => value !== '')
        );

        const isEmpty = Object.keys(trimmedOrder).length === 0;

        if (!isEmpty) {
            const body = []
            Object.entries(trimmedOrder).forEach(([key, value]) => {
                body.push({
                    orderId: 1,
                    itemId: Number(key),
                    quantity: value
                })
            });

            const response = await addOrderItem(body)

            if (response.status == 'success') {
                toast.success("Order Placed Successfully")
            } else {
                console.log(response.error)
            }
        }
        else {
            toast.warn("Please add items")
        }
    }

    return (

        <div className='container m-3'>
            <div>
                <button className="btn btn-primary btn-sm me-1">All Items</button>
                {
                    itemCategories.map((item) => {
                        return (
                            <button key={item.ItemCategoryId} className="btn btn-primary btn-sm me-1">{item.ItemCategoryName}</button>
                        )
                    })
                }
            </div>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">ItemName</th>
                        <th scope="col">ItemPrice</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => {
                            return (
                                <tr key={item.ItemId}>
                                    <td>{index + 1}</td>
                                    <td>{item.ItemName}</td>
                                    <td>{item.ItemPrice}</td>
                                    <td><input onChange={(p) => { orderItems[`${item.ItemId}`] = p.target.value }} type="text" className="form-control" maxLength={30} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={onPlaceOrderClicked} className="btn btn-success mt-2">Place Order</button>

        </div>
    )
}

export default Home
