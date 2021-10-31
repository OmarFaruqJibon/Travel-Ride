import React from 'react';
import './Pricing.css';
const Pricing = () => {
    return (
        <div className="container">
            <h2 className="tour-title">Our Special <span>Packages</span></h2>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="pricing-container">
                        <h5 className="priceing-title">BASIC</h5>
                        <h1 className="price">50.20$</h1>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Hotes Service</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Car Booking</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Good Food</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Safe Journey</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Flight Expance</p>
                        <button className="priceing-btn">Book Now</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                <div className="pricing-container">
                        <h5 className="priceing-title">STANDARD</h5>
                        <h1 className="price">100.20$</h1>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Hotes Service</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Car Booking</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Good Food</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Safe Journey</p>
                        <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Flight Expance</p>
                        <button className="priceing-btn">Book Now</button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <div className="pricing-container">
                            <h5 className="priceing-title">PREMIUM</h5>
                            <h1 className="price">200.20$</h1>
                            <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Hotes Service</p>
                            <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Car Booking</p>
                            <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Good Food</p>
                            <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Safe Journey</p>
                            <p className="priceing-items"><i className="fas cr-icon fa-check"></i> Flight Expance</p>
                            <button className="priceing-btn">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;