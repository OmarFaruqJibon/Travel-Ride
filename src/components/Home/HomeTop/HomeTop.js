import React from 'react';
import './HoMeTop.css';

const HomeTop = () => {
    return (
        <div className="container mb-5">
            <div className="places-title">
                <h2>The World</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum.</small></p>
            </div>
            <div className="row gy-5 g-5">

                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/GhSTpQnV/cat-1.png'} alt="" />
                    <p>USA</p>
                    <p><small>12 Places</small></p>
                </div>
                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/W1FFqk23/cat-2.png'} alt="" />
                    <p>INDIA</p>
                    <p><small>12 Places</small></p>
                </div>
                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/cLpKRLHc/cat-3.png'} alt="" />
                    <p>PARIS</p>
                    <p><small>12 Places</small></p>
                </div>
                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/CKbRmpnp/cat-4.png'} alt="" />
                    <p>DUBAI</p>
                    <p><small>12 Places</small></p>
                </div>
                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/vBMcK25g/cat-5.png'} alt="" />
                    <p>LONDON</p>
                    <p><small>12 Places</small></p>
                </div>
                <div className="col-md-2 col-sm-4 col-6 single-place-item">
                    <img src={'https://i.postimg.cc/W3nhcm79/cat-6.png'} alt="" />
                    <p>ITALY</p>
                    <p><small>12 Places</small></p>
                </div>

            </div>
        </div>
    );
};

export default HomeTop;