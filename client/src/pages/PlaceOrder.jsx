import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getAllItems } from '../services/item'

function PlaceOrder() {

    const location = useLocation()
    let finalOrder = location.state || {}

    const [showOrderItems, setShowOrderItems] = useState([])


    useEffect(() => {
        loadAllItems()
    }, [])


    const loadAllItems = async () => {
        const response = await getAllItems()

        if (response.status == 'success') {
            const allItems = response.data
            const tempOrderItem = []

            for (const orderItem of finalOrder) {
                for (const item of allItems) {
                    if (item.ItemId === orderItem.itemId) {
                        tempOrderItem.push({
                            itemName: item.ItemName,
                            itemPrice: item.ItemPrice,
                            quantity: orderItem.quantity
                        })
                    }
                }
            }

            setShowOrderItems(tempOrderItem)



        } else {
            console.log(response.error)
        }
    }



    return (
        <div className='container m-3'>
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
                        showOrderItems.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.itemName}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>



            <div style={{width:'50%'}}>
                <div className="mb-3 row">
                    <label for="inputName" className="col-sm-2 col-form-label">Enter Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label for="inputMobile" className="col-sm-2 col-form-label">Mobile Number</label>
                    <div className="col-sm-10">
                        <input type="tel" className="form-control" id="inputMobile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
