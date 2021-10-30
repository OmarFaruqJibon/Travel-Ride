import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="HeaderMain-container">
            <div className="container">
                <div className="row g-2">

                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="p-3 brand">
                            <Link to="/"><div className="fw-bold">
                                    <img src={'https://i.postimg.cc/FRL4QRST/logo-1.png'} alt="" />
                                </div></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12  mt-md-4">
                        <div className="p-3">
                        <i className="fas fa-map-marker-alt"></i> <span className="header-contact-info">34TH AVENUE New York</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12  mt-md-4">
                        <div className="p-3">
                        <i className="fas fa-paper-plane"></i> <span className="header-contact-info">dr.care@gmail.com</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12  mt-md-4">
                        <div className="p-3">
                        <i className="fas fa-phone-alt"></i> <span className="header-contact-info">+ 0800 2466 7921</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeaderMain;