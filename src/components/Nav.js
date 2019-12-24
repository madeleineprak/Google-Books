import React, { Component } from 'react';

class Nav extends Component {
    componentDidMount() {
        // Bulma mobile toggle
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            });
        }
    }

    render() {
        return (
            (
                <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            {/* <img src="" className="logo" alt="logo" width="28" height="28"></img> */}
                            <h1 className="title">Google Books</h1>
                        </a>

                        <a className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasic" className="navbar-menu">
                        {/* <div className="navbar-start">
                            <a className="navbar-item">Home</a>
                        </div> */}
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <a className="navbar-item" href="/">Search</a>
                                <a className="navbar-item" href="/">Saved</a>
                                {/* <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Log in</strong>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </nav>
            )
        )
    }
}

export default Nav;