import CartActionTypes from "./cart.types"

import {addItemToCart, removeItemFromCart} from "./cart.utils"

const INIT_DATA = {
    hidden: true,
    cart: []
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
                cart: addItemToCart(state.cart, action.payload)
            }
        case CartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: removeItemFromCart(state.cart, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer