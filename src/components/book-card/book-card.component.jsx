import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import {connect} from 'react-redux'
import StarRatings from 'react-star-ratings'

import {addToCart} from "../../redux/cart/cart.actions"

import "./book-card.styles.scss"

const BookCard = ({book, addToCart}) => {

    const {authors, average_rating, bookID, isbn, language_code, price, ratings_count, title} = book

    return (
        <Card className="book-card">
            <Card.Header>
                <div className="rating">
                    <div className="avg-rating">
                        {average_rating}
                    </div>
                    <div className="stars">
                        <StarRatings rating={typeof average_rating === 'number' ? average_rating : 0} starRatedColor={average_rating > 3.5 ? 'green' : 'red'} starDimension="20px" starSpacing="2px" numberOfStars={5} />
                    </div>
                </div>

                <div className="details">
                    <div className="title" title={title}>
                        {title.length > 20 ? `${title.slice(0,20)} ...` : title}
                    </div>
                    <div className="authors" title={authors}>
                        {authors.length > 20 ? `${authors.slice(0,25)} ...` : authors}
                    </div>
                    <div className="lang-ratingcount">
                        <div className="lang">
                            Language: {language_code}
                        </div>
                        <div className="ratingcount">
                            Ratings: {ratings_count}
                        </div>
                    </div>
                </div>
                <div className="price-addtocart">
                    <div className="price">
                    &#8377;{price}
                    </div>
                    <Link to={`/books/${bookID}`}>
                        <Button variant="info" size="sm">Show more</Button>
                    </Link>
                    <Button className="mt-1" variant="primary" size="sm" onClick={() => addToCart(book)}>Add to cart</Button>
                </div>
               
            </Card.Header>
            {/* <Card.Body>
                
            </Card.Body> */}
        </Card>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (book) => dispatch(addToCart(book))
    }
}

export default connect(null, mapDispatchToProps)(BookCard)
