import React, {Suspense} from 'react'
import './App.scss';

import {Route, Switch} from "react-router-dom"

import {Helmet} from 'react-helmet'

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

// import Homepage from "./pages/homepage/homepage.component"
const Homepage = React.lazy(() => import("./pages/homepage/homepage.component"));
// import Bookspage from "./pages/books-page/books-page.component"
const Bookspage = React.lazy(() => import("./pages/books-page/books-page.component"));
// import BookPage from "./pages/book-page/book-page.page"
const BookPage = React.lazy(() => import("./pages/book-page/book-page.page"));
// import Checkoutpage from "./pages/checkout-page/checkout.page.jsx"
const Checkoutpage = React.lazy(() => import("./pages/checkout-page/checkout.page"));

// import NotFoundUrl from "./pages/not-found/not-found.page"
const NotFoundUrl = React.lazy(() => import("./pages/not-found/not-found.page"))

function App() {
  
  return (
    <div className="app">
      <Helmet>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <title>Books E-Commerce site pseudo frontend application</title>
      </Helmet>
      <Header />
      <main>
        <Suspense fallback={<div>Loading ...</div>}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/books" component={Bookspage} />
          <Route exact path="/books/:bookid" component={BookPage} />
          <Route exact path="/checkout" component={Checkoutpage} />
          {/* <Route exact component={NotFoundUrl} /> */}
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App;
