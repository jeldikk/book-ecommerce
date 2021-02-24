
import './App.scss';

import {Route, Switch} from "react-router-dom"

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"

import Homepage from "./pages/homepage/homepage.component"
import Bookspage from "./pages/books-page/books-page.component"
import Checkoutpage from "./pages/checkout-page/checkout.page.jsx"

function App() {
  

  return (
    <div className="app">
      <Header />
      <main>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/books" component={Bookspage} />
        <Route exact path="/checkout" component={Checkoutpage} />
      </main>
      <Footer />
    </div>
  )
}

export default App;
