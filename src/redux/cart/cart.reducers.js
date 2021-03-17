import CartActionTypes from "./cart.types"

import {addItemToCart, removeItemFromCart} from "./cart.utils"

const INIT_DATA = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state=INIT_DATA, action) => {
    // console.log(action)
    switch(action.type){
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.CLEAR_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.bookID !== action.payload.bookID)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state
    }
}

export default cartReducer