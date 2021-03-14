import React from 'react'

import {useHistory} from 'react-router-dom'

import "./cart-dropdown.styles.scss"

import {Button} from 'react-bootstrap'

import {connect} from 'react-redux'

import DropdownBookCard from "../dropdown-book-card/dropdown-book-card.component"

import {calculateItemsCount} from "../../redux/cart/cart.utils"
import {toggleCartDropDown, clearCart} from "../../redux/cart/cart.actions"

const CartDropdown = ({itemsCount, items, toggleCartDropDown, clearCart}) => {

    console.log(items);

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
                    {
                        items.map((item) => <DropdownBookCard key={item.bookID} selectedBook={item} />)
                    }
                </div>
            }
            <div className="button-div">
                <Button variant="success" disabled={itemsCount === 0 ? true : false} onClick={onCheckoutClickHandler}>Checkout Items</Button>
                <Button variant="danger" disabled={itemsCount === 0 ? true : false} onClick={() => clearCart() }>Clear Cart</Button>
            </div>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsCount: calculateItemsCount(state.cart.cartItems),
        items: state.cart.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartDropDown: () => dispatch(toggleCartDropDown()),
        clearCart: ()=>dispatch(clearCart()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);


