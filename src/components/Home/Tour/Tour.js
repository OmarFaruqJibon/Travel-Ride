import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const {_id, title, img, duration , description, price ,address, rating} = props.cors;
    return (
        <div className="col-lg-4 col-md-6 col-12 mt-5">
            <div className="cart">
                <div className="thumb">
                    <img src={img} alt="" />
                </div>

                <div className="cart-detail">
                    <p className="course-item-heading"><small><i className="fas address-icon fa-map-marker-alt"></i> {address} </small></p>
                    <h5><strong>{title}</strong></h5>
                    <p><small>{description}</small></p>
                    
                    <div className="d-flex justify-content-between">
                        <div>
                            <p><small>Duration : {duration}</small></p>
                            <p><small>Rating : {rating}<i className=" rating fas fa-star"></i></small></p>
                        </div>
                        <h4 className="price">$ {price}</h4>
                    </div>
                   <div className="text-center">
                   <Link to={`/tourDetails/${_id}`}><button className="btn signIn-btn">Book Now</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;