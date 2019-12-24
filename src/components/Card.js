import React from "react";

function Card(props) {
    return (
        <div className="card columns">
            {/* <div className="level-item"> */}
            <div className="card-image column is-one-quarter">
                <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="Placeholder image"></img>
            </div>
            {/* </div> */}
            {/* <div className="level-item"> */}
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
                {/* </div> */}
            </div>
        </div>
    )
}

export default Card;