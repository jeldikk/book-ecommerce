import React from 'react'
import { Button } from 'react-bootstrap';

import {connect} from 'react-redux'

import StarRatings from 'react-star-ratings'

import "./checkout-book-card.styles.scss"

import {removeFromCart, addToCart, clearFromCart} from "../../redux/cart/cart.actions"


const CheckoutBookCard = ({checkoutItem, removeFromCart, addToCart, clearFromCart}) => {

    const {authors, average_rating, isbn, price, ratings_count, title, quantity} = checkoutItem;

    return (
        <div className="checkout-book-card shadow">
            <div className="rating-details">
                <div className="average-rating">
                    {average_rating}
                </div>  
                <div className="star-rating">
                    <StarRatings rating={typeof average_rating === 'number' ? average_rating : 0} starRatedColor={average_rating > 3.5 ? 'green' : 'red'} starDimension="25px" starSpacing="2px" numberOfStars={5} />
                </div>
                <div className="rating-count">
                    <span>No. Of Ratings :</span> {ratings_count}
                </div>
            </div>
            <div className="item-details">
                <div className="title">
                    {title}
                </div>
                <div className="author">
                    {authors}
                </div>
                <div className="quantity-controls">
                    <Button variant="danger" disabled={quantity === 1 ? true : false} onClick={()=>removeFromCart(checkoutItem)}>-</Button>
                    <span className="quantity">{quantity}</span>
                    <Button variant="success" onClick={()=>addToCart(checkoutItem)}>+</Button>
                </div>
            </div>
            <div className="price-and-actions">
                <div className="price">&#8377; {quantity*price} </div>
                <Button variant="danger" onClick={() => clearFromCart(checkoutItem)}>Remove Item</Button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (item) => dispatch(removeFromCart(item)),
        addToCart: (item) => dispatch(addToCart(item)),
        clearFromCart: (item) => dispatch(clearFromCart(item)),
    }
}

export default connect(null, mapDispatchToProps)(CheckoutBookCard)
