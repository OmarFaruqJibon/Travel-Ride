import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const {user,handleSignOut} = useAuth();
    return (
        <div className="nav-bg">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Link className="nav-item my-nav" to="/home">Home</Link>
                                <Link className="nav-item my-nav" to="/tours">Tours</Link>
                                <Link className="nav-item my-nav" to="/admin">Admin</Link>
                                <Link className="nav-item my-nav" to="/about">About</Link>
                                <Link className="nav-item my-nav" to="/contact">Contact</Link>
                        </div>

                        <span className="navbar-text">
                            {user.email ?
                                <><i className="fas fa-user-circle me-2 text-light"></i><span className="text-light">{user.displayName} </span> <button onClick={handleSignOut} className="signIn-btn me-2">Sign Out</button>
                                </>:
                                <Link to="/signIn"><button className="signIn-btn">Sign In</button></Link>
                            }
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;