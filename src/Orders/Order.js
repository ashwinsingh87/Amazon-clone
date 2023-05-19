import React from 'react'
import moment from 'moment'
import "./Order.css"
const Order = ({ basket }) => {
    var grandTotal = 0;
    {
        basket?.map((object) => (
            grandTotal= grandTotal + object.price))
    }
    return (
        <div className='order'>
            <div className='order_Details'>
            <h2>Order Details</ h2>
            <p><strong>{moment().format('MMMM Do YYYY, h:mm:ss a')}</strong></p>               
            </div>
            {basket?.map((object) => (
                <div className="orderlist">
                    <img className="orderlist__image" src={object.image} />
                    <div className="orderlist__info">
                        <p>{object.title}</p>
                        <div className="orderlist__price">
                            $ <strong>{object.price}</strong>
                        </div>
                        <div className="orderlist__rating">
                            {Array(object.rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="order_grandTotal">
            <strong>Grand Total: $ {grandTotal}</strong>
            </div>
        </div>
    )
}

export default Order
