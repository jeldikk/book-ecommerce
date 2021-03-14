import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'

import BookCard from "../book-card/book-card.component"

const BooksCardContainer = ({booksList}) => {

    return (
        <Container className="books-card-container">
            <Row>
                {
                    booksList.map((book) => (
                        <Col sm={6} key={book.bookID} >
                            <BookCard book={book} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default BooksCardContainer
