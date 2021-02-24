import React, {useState} from 'react'

import { Container, Form, FormGroup, Button, Row, Col } from 'react-bootstrap'

import "./search-sort-form.styles.scss"

const SearchSortForm = ({setSearchSortData}) => {

    const [searchType, setSearchType] = useState("");
    const [sortType, setSortType] = useState("");
    const [searchField, setSearchField] = useState('')

    const onSortTypeChange = (event) => {
        const {value} = event.target;
        setSortType(value)
    }

    const onSearchTypeChange = (event) => {
        const {value} = event.target;
        setSearchType(value)
    }

    const onSearchFieldChange = (event) => {
        const {value} = event.target;
        setSearchField(value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        setSearchSortData({
            searchType,
            sortType,
            searchField
        })
    }

    return (
        <Container>
            <Form inline onSubmit={onFormSubmit} className="search-sort-form">
                <Row>
                    <Col md={3}>
                        <FormGroup controlId="formSortType">
                            <Form.Label>Sort By :</Form.Label>
                            <Form.Control as="select" onChange={onSortTypeChange} value={sortType}>
                                <option value="">Choose ...</option>
                                <option value="price">Price</option>
                                <option value="ratingcount">Rating Count</option>
                            </Form.Control>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                    <FormGroup controlId="formChooseField">
                        <Form.Label>Search By :</Form.Label>
                        <Form.Control as="select" onChange={onSearchTypeChange} value={searchType}>
                            <option value="">Choose ...</option>
                            <option value="title">Title</option>
                            <option value="authors">Authors</option>
                            <option value="isbn">ISBN</option>
                        </Form.Control>
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup controlId="formSearchBox">
                            <Form.Control type="text" placeholder={`Search by ${searchType}`} value={searchField} onChange={onSearchFieldChange} />
                            <Form.Text className="text-muted">
                                Non alphabetical characters are not considered
                            </Form.Text>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <Button type="submit" variant="outline-success">Search Books</Button>
                        <Form.Text className="text-muted">click here to reflect</Form.Text>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SearchSortForm
