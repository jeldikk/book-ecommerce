import React from 'react'
import { Container } from 'react-bootstrap'

import {connect} from 'react-redux'
import {calculateItemsCount} from "../../redux/cart/cart.utils"
import CheckoutBookCard from "../../components/checkout-book-card/checkout-book-card.component"


import "./checkout-page.styles.scss"

const Checkoutpage = ({cartItems, finalPay, itemsCount}) => {
    return (
        <div className="checkout-page">
            <Container fluid="sm">
                {
                    itemsCount === 0 ?

                    <div className="no-items-in-cart">
                        No Items present In cart
                    </div>
                    :
                    <>
                        <div className="checkout-items">
                            {
                                cartItems.map((cartItem)=> <CheckoutBookCard key={cartItem.bookID} checkoutItem={cartItem} />)
                            }
                        </div>
                        <div className="final-pay">
                            {finalPay}
                        </div>
                    </>
                }
                
                
            </Container>
        </div>
    )
}


const mapStateToProps = (state)=>{
    return {
        itemsCount: calculateItemsCount(state.cart.cartItems),
        cartItems: state.cart.cartItems,
        finalPay: state.cart.cartItems.reduce((accPay, item)=>{
            return accPay + item.quantity*item.price
        }, 0)
    }
}

export default connect(mapStateToProps, null)(Checkoutpage)
