import React from "react";

function Card(props) {
    return (
        <div className="card columns" key={props.book.id}>
            <div className="card-image column is-one-quarter">
                <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="Placeholder image"></img>
            </div>
            <div className="card-content column">
                <p className="title is-4">{props.book.volumeInfo.title}</p>
                <p className="subtitle is-6">by {!props.book.volumeInfo.authors ? "Unknown" : props.book.volumeInfo.authors.map(author => (
                    <span>{author} </span>
                ))}</p>

                <p>{props.book.volumeInfo.description}</p>
                <br></br>
                <a>{!props.book.volumeInfo.categories ? "" : props.book.volumeInfo.categories.map(category => (
                    <span>{category}</span>
                ))}</a>
                <br></br>
                <time dateTime=""> {"Published Date: " + props.book.volumeInfo.publishedDate}</time>
                <br></br>
                <div className="buttons">
                    <a className="button" target="_blank" href={props.book.volumeInfo.infoLink}>View</a>
                    <button onClick={() => props.handleSave(props.book.id)} className="button is-primary">Save</button>
                </div>
            </div>
        </div>
    )
}

export default Card;