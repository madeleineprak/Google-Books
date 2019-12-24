import React from "react";

function Form(props) {
    return (
        <div className="field has-addons">
          <div className="control text-input">
            <input value={props.search} name="search" className="input is-primary" onChange={props.handleInputChange} type="text" placeholder="Search a book"></input>
          </div>
          <div className="control input-button">
            <button className="button is-primary" onClick={props.handleUserInput} >Go</button>
          </div>
        </div>
    )
}

export default Form;