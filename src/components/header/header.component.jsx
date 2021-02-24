import React from "react";

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
// import {Button} from 'react-bootstrap'

import {toggleCartDropDown} from "../../redux/cart/cart.actions"
import {calculateItemsCount} from "../../redux/cart/cart.utils"

import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"

import {FaShoppingCart} from "react-icons/fa"

import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";

const Header = ({toggleCartDropDown, itemCount, hidden}) => {

    const onSearchHandle = (event) => {
        event.preventDefault();

        console.log('search functionality')
    }


    return (
        <header className="header fixed-top">
            <Navbar bg="primary" variant="light">
                <Container>
                    <Link className="navbar-brand" to="/">Books E-commerce</Link>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/books">Books</Link>
                        <Button variant="warning" onClick={() => toggleCartDropDown()}><FaShoppingCart /> Cart{`(${itemCount})`}</Button>
                        
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="warning" onClick={onSearchHandle}>Search</Button>
                    </Form> */}
                    {/* <Cart /> */}
                </Container>
            </Navbar>
            { hidden ? null : <CartDropdown />}
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        hidden: state.cart.hidden,
        itemCount: calculateItemsCount(state.cart.cartItems)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartDropDown: () => dispatch(toggleCartDropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
