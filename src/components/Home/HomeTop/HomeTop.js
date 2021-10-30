import React from 'react';
import { Link } from 'react-router-dom';
import './HoMeTop.css';

const HomeTop = () => {
    return (
        <div>
            <div className="container mb-5">
                <div className="places-title">
                    <h2>The <span>World</span> </h2>
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eum.</small></p>
                </div>

                <div className="row">

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
                        <p className="mb-4"> <i class="fas fa-map-marker-alt"></i> America  |  <i class="far fa-calendar-alt"></i> July 19th</p>
                        <p className="mb-5"> <small>Curabitur nunc erat, consequat in erat ut, congue bibendum nulla. Suspendisse id pharetra lacus, et hendrerit mi <br /> quis leo elementum.</small></p>
                        <Link to="/tours"><button className="signIn-btn">View Our Tours</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;