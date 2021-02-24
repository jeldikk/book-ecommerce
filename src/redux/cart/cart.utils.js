
export const addItemToCart = (cartItems, itemToBeAdded) => {

    let itemFound = cartItems.find((item) => item.bookID == itemToBeAdded.bookID)

    if(!itemFound){
        return [...cartItems, {...itemToBeAdded, quantity: 1}]
    }
    else{
        return cartItems.map((item) => {
            if(item.bookID === itemToBeAdded.bookID){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else{
                return item
            }
        })
    }
}

export const removeItemFromCart = (cartItems, itemToBeRemoved) => {

    return cartItems.map((item) => {
        if(item.bookID === itemToBeRemoved.bookID){
            return {
                ...item,
                quantity: item.quantity - 1
            }
        }
        else{
            return item
        }
    })
}

export const calculateItemsCount = (cartItems) => {

    return cartItems.reduce((actualCount, item) => {
        return actualCount + item.quantity
    }, 0)
}