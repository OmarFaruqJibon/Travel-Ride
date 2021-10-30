import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-area">
            <div className="banner-text">
                <p><small className="fw-bold">THE BESY TOUR EXPERIENCE</small></p>
                <h1>Explore the Beauty of the Beautiful World</h1>
                <p> <small>Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus <br /> et hendrerit mi quis leo elementum.</small></p>
                <button className="signIn-btn">Learn More</button>
            </div>

            </div>
        </div>
    );
};

export default Banner;