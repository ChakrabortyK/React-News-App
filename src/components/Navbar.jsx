// import PropTypes from 'prop-types'
import React, { Component } from 'react'
// import { Link } from "react-router-dom";


export class Navbar extends Component {
    // static propTypes = {}

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">APInews</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">About Page</a>
                            </li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">business</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">entertainment</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">general</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">health</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">science</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">sports</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="/">technology</a></li>

                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar   