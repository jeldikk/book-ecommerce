import CartActionTypes from "./cart.types"

export const toggleCartDropDown = () => {
    return {
        type: CartActionTypes.TOGGLE_CART
    }
}

export const addToCart = (item) => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload: item
    }
}

export const clearCart = ()=>{
    return {
        type: CartActionTypes.CLEAR_CART,
    }
}

export const removeFromCart = (item) => {
    return {
        type: CartActionTypes.REMOVE_FROM_CART,
        payload: item
    }
}
