import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <button className="navbar-brand">Navbar</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="nav-link active">Home</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">About</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link">Contact</button>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Authentication</button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><button className="dropdown-item">Signup</button></li>
                                    <li><button className="dropdown-item">Login</button></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item">Forgot Password</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}