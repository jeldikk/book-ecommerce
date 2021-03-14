import React from 'react'


import "./dropdown-book-card.styles.scss"

const DropdownBookCard = ({selectedBook}) => {

    const {quantity, isbn, title, price}= selectedBook;

    return (
        <div className="dropdown-book-card shadow">
            <div className="title">
                {title}
            </div>
            <div className="isbn">
                {isbn}
            </div>
            <div className="quantity-price">
                <div className="quantity">
                    Quantity: {quantity}
                </div>
                <div className="price">
                    Price: &#8377; {price}
                </div>
            </div>
        </div>
    )
}

export default DropdownBookCard
