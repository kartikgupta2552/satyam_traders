import React from 'react'
import { useLocation } from 'react-router-dom'

function PlaceOrder() {

    const location = useLocation()
    const finalOrder = location.state || {}

    console.log(finalOrder)

    

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
                    {/* {
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
                    } */}
                </tbody>
            </table>
        </div>
    )
}

export default PlaceOrder
