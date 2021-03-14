import React, { useEffect, useState, useMemo } from "react";

import { Form, FormGroup, Container, Button } from "react-bootstrap";

import { fetchBookData } from "../../axios/axios.util";

import BooksList from "../../components/books-list/books-list.component";
import Pagination from "../../components/pagination/pagination.component";
import SearchSortForm from "../../components/search-sort-form/search-sort-form.component"

import BooksCardContainer from "../../components/books-card-container/books-card-container.component"

import withSpinner from "../../components/with-spinner/with-spinner.component";

export const ITEMS_PER_PAGE = 10;

const BooksListWithSpinner = withSpinner(BooksList);
const BooksCardContainerWithSpinner = withSpinner(BooksCardContainer)

const Bookspage = () => {
  const [loading, setLoading] = useState(true);
  const [bookList, setBookList] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [formData, setFormData] = useState({searchType: '', sortType:"", searchField:''})
  
  console.log(formData)

  useEffect(() => {
    fetchBookData()
      .then((results) => {
        console.log(results.data);
        setBookList(results.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error occured while fetching data :", err.message);
      });
  }, []);


  // const booksArraySlice = useMemo(() => bookList.slice(currPage*ITEMS_PER_PAGE, (currPage+1)*ITEMS_PER_PAGE), [currPage])
  const booksArraySlice = bookList.slice(
    currPage * ITEMS_PER_PAGE,
    (currPage + 1) * ITEMS_PER_PAGE
  );

  // console.log({booksArraySlice})

  const onPageChange = (pagenumber) => {
    setCurrPage(pagenumber.selected);
  };

  return (
    <div className="books-page">
      <SearchSortForm setSearchSortData={setFormData} />
      {/* <BooksListWithSpinner isLoading={loading} booksArray={booksArraySlice} currPage={currPage} /> */}

      <BooksCardContainerWithSpinner isLoading={loading} booksList={booksArraySlice} />

      {!loading ? (
        <Pagination
          pageCount={bookList.length / ITEMS_PER_PAGE}
          pageRangeDisplayed={5}
          marginPagesDisplayed={5}
          onPageChange={onPageChange}
        />
      ) : null}

    </div>
  );
};

export default Bookspage;
