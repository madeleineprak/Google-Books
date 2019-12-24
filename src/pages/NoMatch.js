import React from "react";

function NoMatch() {
    return (
        <section className="hero is-danger is-medium">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-centered"><span>404 Page Not Found </span>
                        <span role="img" aria-label="Face With Rolling Eyes Emoji">🙄</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default NoMatch;