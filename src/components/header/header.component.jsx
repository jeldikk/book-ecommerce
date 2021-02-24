import React from "react";

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {toggleCartDropDown} from "../../redux/cart/cart.actions"

import CartIcon from "../cart-icon/cart-icon.component"

import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button,
    Container,
} from "react-bootstrap";

const Header = ({toggleCartDropDown}) => {

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
                        <Link className="nav-link" to="#" onClick={() => toggleCartDropDown()}>cart</Link>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="warning" onClick={onSearchHandle}>Search</Button>
                    </Form> */}
                    {/* <Cart /> */}
                </Container>
            </Navbar>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        hidden: state.cart.hidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartDropDown: () => dispatch(toggleCartDropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
