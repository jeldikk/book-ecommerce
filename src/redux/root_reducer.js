import {combineReducers} from 'redux'

import cartReducer from "./cart/cart.reducers"
import booksReducer from "./books/books.reducers"

const rootReducer = combineReducers({
    cart: cartReducer,
    books: booksReducer
})

export default rootReducer
