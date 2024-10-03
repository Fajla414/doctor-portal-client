import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <Link to={'/home'} className='nav-link fw-bold'>Home</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={'/about'} className='nav-link fw-bold'>About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={'/dental-services'} className='nav-link fw-bold'>Dental Services</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={'/reviews'} className='nav-link fw-bold text-light'>Reviews</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={'/blog'} className='nav-link fw-bold text-light'>Blog</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link to={'/contact'} className='nav-link fw-bold text-light'>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;