import React, { useEffect, useState, useMemo } from "react";
import {useSelector} from 'react-redux'
import { Form, FormGroup, Container, Button } from "react-bootstrap";

import { fetchBookData } from "../../axios/axios.util";

import BooksList from "../../components/books-list/books-list.component";
import Pagination from "../../components/pagination/pagination.component";
import SearchSortForm from "../../components/search-sort-form/search-sort-form.component"

import BooksCardContainer from "../../components/books-card-container/books-card-container.component"

import withSpinner from "../../components/with-spinner/with-spinner.component";

import {getBooksByPageNumber, selectIsLoading} from "../../redux/books/books.selectors"

export const ITEMS_PER_PAGE = 10;

const BooksListWithSpinner = withSpinner(BooksList);
const BooksCardContainerWithSpinner = withSpinner(BooksCardContainer)

const Bookspage = () => {
  // const [loading, setLoading] = useState(false);
  // const [bookList, setBookList] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [formData, setFormData] = useState({searchType: '', sortType:"", searchField:''})

  const [booksLength, booksList] = useSelector(state => getBooksByPageNumber(state, currPage))
  const loading = useSelector(selectIsLoading)
  
  // console.log({booksLength, booksList})

  // useEffect(() => {
  //   // fetchBookData()
  //   //   .then((results) => {
  //   //     console.log(results.data);
  //   //     setBookList(results.data);
  //   //     setLoading(false);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.error("Error occured while fetching data :", err.message);
  //   //   });

  //   let booklist = get

  // }, []);


  // const booksArraySlice = useMemo(() => bookList.slice(currPage*ITEMS_PER_PAGE, (currPage+1)*ITEMS_PER_PAGE), [currPage])
  // const booksArraySlice = bookList.slice(
  //   currPage * ITEMS_PER_PAGE,
  //   (currPage + 1) * ITEMS_PER_PAGE
  // );

  // console.log({booksArraySlice})

  const onPageChange = (pagenumber) => {
    setCurrPage(pagenumber.selected);
  };
  // console.log({loading, booksLength, booksList})
  return (
    <div className="books-page">
      <SearchSortForm setSearchSortData={setFormData} />
      {/* <BooksListWithSpinner isLoading={loading} booksArray={booksArraySlice} currPage={currPage} /> */}

      <BooksCardContainerWithSpinner isLoading={loading} booksList={booksList} />

      {!loading ? (
        <Pagination
          pageCount={booksLength / ITEMS_PER_PAGE}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          onPageChange={onPageChange}
        />
      ) : null}

    </div>
  );
};

export default Bookspage;
