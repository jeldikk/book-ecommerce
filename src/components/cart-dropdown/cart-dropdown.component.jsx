import React from 'react'

import "./cart-dropdown.styles.scss"

import {connect} from 'react-redux'

import {calculateItemsCount} from "../../redux/cart/cart.utils"

const CartDropdown = ({itemsCount}) => {
    return (
        <div className="cart-dropdown">
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsCount: calculateItemsCount(state.cart.cartItems)
    }
}

export default connect(mapStateToProps, null)(CartDropdown);
