import React from 'react'

import ReactPaginate from 'react-paginate'

const Pagination = ({...otherProps}) => {

    // const {pageCount=10,pageRangeDisplayed=3, marginPagesDisplayed=3} = otherProps
    return (
        <div className="pagination-container">
             <ReactPaginate
                {...otherProps}
                
                containerClassName="pagination pagination-md justify-content-center"
                pageClassName="page-item"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                pageLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                activeClassName="active"
                previousLabel="Previous"
                nextLabel="Next"
                breakLabel="..."
            />
        </div>
    )
}

export default Pagination
