import React from 'react'
import { Table } from 'react-bootstrap'

import BookRow from "../book-row/book-row.component"

import "./books-list.styles.scss"

import {ITEMS_PER_PAGE} from "../../pages/books-page/books-page.component"

const BooksList = ({booksArray, currPage}) => {
    return (
        <div className="books-list">
            <Table striped bordered hover>
                <thead className="text-center">
                    <tr>
                        <th>S.no</th>
                        <th>Language</th>
                        <th>ISBN</th>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Authors</th>
                        <th>Price</th>
                        <th>Avg.Rating</th>
                        <th>Rating Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booksArray.map((book, index) => <BookRow book={book} sno={currPage*ITEMS_PER_PAGE + index + 1} key={book.bookID} />)
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BooksList
