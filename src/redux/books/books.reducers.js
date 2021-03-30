import BooksActionTypes from "./books.types"

const INITIAL_STATE = {
    loading: true,
    books: {}
}
const booksReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case BooksActionTypes.SET_BOOK_DB:
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case BooksActionTypes.FETCHING_BOOK_DATA:
            return {
                ...state,
                loading: true
            }
        default:
            return {
                ...state
            }
    }
}

export default booksReducer