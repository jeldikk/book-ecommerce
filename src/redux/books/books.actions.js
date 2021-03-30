import BooksActionTypes from "./books.types"
import {fetchBookData} from "../../axios/axios.util"

import {normaliseBookList} from "./books.utils"


export const setBooksDB = (db) => {
    return {
        type: BooksActionTypes.SET_BOOK_DB,
        payload: db
    }
}

export const fetchingBookData = ()=>{
    return {
        type: BooksActionTypes.FETCHING_BOOK_DATA
    }
}

export const successFetchingData = ()=>{
    return {
        type: BooksActionTypes.SUCCESS_FETCHING_DATA
    }
}

export const fetchBooksData = () => {
    return async (dispatch) => {
        dispatch(fetchingBookData())
        let bookList = await fetchBookData();
        // console.log({bookList})
        let normalisedData = await normaliseBookList(bookList.data);
        console.log(typeof normalisedData)
        dispatch(setBooksDB(normalisedData));
        // dispatch(successFetchingData())
    }
}