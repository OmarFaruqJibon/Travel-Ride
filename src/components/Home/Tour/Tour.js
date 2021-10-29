import React from 'react';
import { Link } from 'react-router-dom';
import './Tour.css';

const Tour = (props) => {
    const {_id, title, img, duration, description, price , rating}=props.cors;
    console.log(_id);
    return (
        <div className="col-md-3 col-6 mt-5">
            <div className="cart">
                <div className="thumb">
                    <img src={img} alt="" />
                </div>
                <div className="cart-detail">
                    <p className="course-item-heading"><small>TOUR</small></p>
                    <h5>{title}</h5>
                    <p><small>Description : {description}</small></p>
                    <p><small>Rating : {rating}<i className=" rating fas fa-star"></i></small></p>
                    <div className="d-flex justify-content-between">
                        <p><small>Duration : {duration}</small></p>
                        <p className="price"><small>$ {price}</small></p>
                    </div>
                   <div className="text-center">
                   <Link to={`/tourDetails/${_id}`}><button className="btn detail-btn">Learn More</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;