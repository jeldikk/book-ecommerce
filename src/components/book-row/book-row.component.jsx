import React from 'react'
import {Button} from 'react-bootstrap'

import StarRatings from 'react-star-ratings'

const TITLE_LENGTH = 30;
const AUTHORS_LENGTH = 30;

const BookRow = ({book, sno}) => {

    const {authors, average_rating, bookID, isbn, language_code, price, ratings_count, title} = book

    return (
        <tr className="book-row">
            <td>{sno}</td>
            <td>{language_code}</td>
            <td>{isbn}</td>
            <td>{bookID}</td>
            <td title={title}>{title.length > TITLE_LENGTH ? `${title.slice(0,TITLE_LENGTH)}...` : title}</td>
            <td title={authors}>{authors.length > AUTHORS_LENGTH ? `${authors.slice(0,AUTHORS_LENGTH)}...` : authors}</td>
            <td>{price}</td>
            <td>
                {
                    // typeof(average_rating) == "number" ? <StarRatings rating={average_rating} starRatedColor={average_rating > 3.5 ? 'green' : 'red'} starDimension="30px" starSpacing="5px" numberOfStars={5} /> : average_rating
                    <StarRatings rating={typeof(average_rating) == 'number' ? average_rating : 0} starRatedColor={average_rating > 3.5 ? 'green' : 'red'} starDimension="30px" starSpacing="5px" numberOfStars={5} />
                }
            </td>
            <td>{ratings_count}</td>
            <td className="text-center"><Button variant="primary">Add to cart</Button></td>
        </tr>
    )
}

export default BookRow
