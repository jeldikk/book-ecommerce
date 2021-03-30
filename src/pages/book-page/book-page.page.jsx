import React from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import "./book-page.styles.scss"
import {Button} from 'react-bootstrap'
import {getBookByID} from "../../redux/books/books.selectors"

const BookPage = () => {

    const {bookid} = useParams();
    const book = useSelector(state => getBookByID(state, bookid))
    console.log({book})
    
    return (
        <div className="book-page">
            <h1>Book Detail</h1>

            <pre>
                {
                    JSON.stringify(book, null, 2)
                }
            </pre>
            <Button variant="primary">Add to Cart</Button>
        </div>
    )
}

export default BookPage
