import React from 'react'

import {useHistory} from 'react-router-dom'

import "./cart-dropdown.styles.scss"

import {Button} from 'react-bootstrap'

import {connect} from 'react-redux'

import {calculateItemsCount} from "../../redux/cart/cart.utils"
import {toggleCartDropDown} from "../../redux/cart/cart.actions"

const CartDropdown = ({itemsCount, toggleCartDropDown}) => {

    const history = useHistory();

    const onCheckoutClickHandler = (event)=>{
        
        history.push('/checkout');
        toggleCartDropDown();
    }
    return (
        <div className="cart-dropdown">
            {
                itemsCount === 0
                ?
                <div className="empty-cart-items">
                    Your Cart is Empty. Add Items To checkout
                </div>
                :
                <div className="cart-items-list">

                </div>
            }
            <div className="button-div">
                <Button variant="success" disabled={itemsCount === 0 ? true : false} onClick={onCheckoutClickHandler}>Checkout Items</Button>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsCount: calculateItemsCount(state.cart.cartItems)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartDropDown: () => dispatch(toggleCartDropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
