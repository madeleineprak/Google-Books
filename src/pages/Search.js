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

    handleSave = id => {
        const book = this.state.books.find(book => book.id === id);
        API.saveBook({
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            authors: book.volumeInfo.authors,
            categories: book.volumeInfo.categories,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
            googleId: book.id,
        })
        .then(() => this.getBooks());
    }

    render() {
        return (
            <div className="body-wrapper">
                <Hero />
                <Form search={this.state.search} handleInputChange={this.handleInputChange} handleUserInput={this.handleUserInput} />

                <div className="card card-wrapper">
                    <header className="card-header">
                        <p className="card-header-title">
                            Results
    </p>
                    </header>
                    {!this.state.books ? <h1 className="title">Sorry.. Try a different search</h1> : this.state.books.map(book => (
                        <Card key={book.id} book={book} handleSave={this.handleSave}/>
                    ))}
                </div>

            </div>
        )
    }
}

export default Search;