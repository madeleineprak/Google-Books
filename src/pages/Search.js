import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Card from "../components/Card";

class Search extends Component {
    state = {
        search: "",
        books: []
    }

    componentDidMount() {
        this.getBooks("Asia");
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleUserInput = event => {
        event.preventDefault();
        this.getBooks(this.state.search);
    }

    getBooks = search => {
        API.getGoogleBooks(search)
            .then(res =>
                // console.log(res.data.items)
                this.setState({
                    books: res.data.items
                })
            )
            .catch(() =>
                this.setState({
                    books: []
                })
            );
    };

    render() {
        return (
            <div class="body-wrapper">
                <Hero />
                <Form search={this.state.search} handleInputChange={this.handleInputChange} handleUserInput={this.handleUserInput} />

                <div class="card card-wrapper">
                    <header class="card-header">
                        <p class="card-header-title">
                            Results
    </p>
                    </header>
                    {!this.state.books ? <h1 className="title">Sorry.. Try a different search</h1> : this.state.books.map(book => (
                        <Card book={book} />
                    ))}
                </div>

            </div>
        )
    }
}

export default Search;