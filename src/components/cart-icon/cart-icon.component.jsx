import React from 'react'

import {ReactComponent as CartIcon} from "../../assets/shopping-cart.svg"

import "./cart-icon.styles.scss"

const Cart = () => {
    return (
        <div className="cart">
            <CartIcon className="cart-icon"/>
            <div className="item-count">0</div>
        </div>
    )
}

export default CartIcon
