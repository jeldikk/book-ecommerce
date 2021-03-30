import {createSelector} from "reselect"
import {ITEMS_PER_PAGE} from "./books.utils"


const selectBooks = state => state.books.books;

export const selectIsLoading = state => state.books.loading
const selectBooksAsList = createSelector(
    selectBooks,
    (booksMap) => Object.values(booksMap)
)

export const getBooksByPageNumber = createSelector(
    selectBooksAsList,
    (_, pageno) => pageno,
    (bookslist, pno) => {
        return [bookslist.length,bookslist.slice(pno*ITEMS_PER_PAGE, (pno+1)*ITEMS_PER_PAGE)]
    }
)

export const getBookByID = createSelector(
    selectBooks,
    (_, bookid) => bookid,
    (books, bookid) => books[bookid]
)