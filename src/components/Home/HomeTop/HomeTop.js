import React from 'react';
import { Link } from 'react-router-dom';
import './HoMeTop.css';

const HomeTop = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="places-title">
                    <h2 className="fw-bold">The <span>World</span> </h2>
                    <p><small>We provide world's best tour experience. Happy Tour.</small></p>
                </div>

                <div className="row g-md-3">

                    <div className="col-md-4 col-6">
                        <div className=" single-place-item">
                            <img src={'https://i.postimg.cc/GhSTpQnV/cat-1.png'} alt="" />
                            <p className="mt-3 mb-2">USA</p>
                            <p><small>12 Places</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="single-place-item">
                            <img src={'https://i.postimg.cc/W1FFqk23/cat-2.png'} alt="" />
                            <p className="mt-3 mb-2">INDIA</p>
                            <p><small>12 Places</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className=" single-place-item">
                            <img src={'https://i.postimg.cc/cLpKRLHc/cat-3.png'} alt="" />
                            <p className="mt-3 mb-2">PARIS</p>
                            <p><small>12 Places</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="single-place-item">
                            <img src={'https://i.postimg.cc/CKbRmpnp/cat-4.png'} alt="" />
                            <p className="mt-3 mb-2">DUBAI</p>
                            <p><small>12 Places</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                        <div className="single-place-item">
                            <img src={'https://i.postimg.cc/vBMcK25g/cat-5.png'} alt="" />
                            <p className="mt-3 mb-2">LONDON</p>
                            <p><small>12 Places</small></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6">
                    <div className="single-place-item">
                            <img src={'https://i.postimg.cc/W3nhcm79/cat-6.png'} alt="" />
                            <p className="mt-3 mb-2">ITALY</p>
                            <p><small>12 Places</small></p>
                    </div>
                    </div>
                </div>
            </div>


        <div className="special-tour">
                <div className="text-center text-white">
                    <div className="special-tour-text p-4">
                        <h5>From <span>$730</span></h5>
                        <h2>Princess World Cruise Vacation</h2>
                        <p className="mb-4"> <i className="fas fa-map-marker-alt"></i> America  |  <i className="far fa-calendar-alt"></i> July 19th</p>
                        <p className="mb-5"> <small> Princess become your home as you depart from Los Angeles on a world cruise, set to visit more countries than <br /> ever before. Sail to 50 destinations</small></p>
                        <Link to="/tours"><button className="signIn-btn">View Our Tours</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;