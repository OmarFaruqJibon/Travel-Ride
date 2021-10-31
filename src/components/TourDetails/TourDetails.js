import { jsonEval } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import './TourDetails.css';

const TourDetails = () => {
    const [tour, setTour] = useState({});
    const {tourId} = useParams();
    const {title, img, duration, description, price , rating} = tour;
    const {user} = useAuth();
    const { register,reset, handleSubmit, formState: { errors } } = useForm();

    // booking information-------------------------------------------
    const url = `https://rocky-headland-86423.herokuapp.com/tourDetails/${tourId}`;
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setTour(data);
        })
    },[]);

// user information-------------------------------------------
    const onSubmit = data =>{
        console.log(data);
        data.bookingID = tourId;
        fetch('https://rocky-headland-86423.herokuapp.com/bookings',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
            if(result.insertedId){
                alert('Booking Successfully.');
                reset();
            }
        })
    }

    return (
        <div className="container">
            <div>
                <h2 className=" fw-bold mt-5 mb-4">Tour Booking</h2>
                <div className="row g-md-5">
                    <div className="col-md-6 col-12 p-3">
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <h5><strong>{title}</strong></h5>
                        <p><small><strong>About Tour:</strong> {description}</small></p>
                        <p><small><strong>Duration:</strong> {duration}</small></p>
                        <p><small><strong>Rating:</strong> {rating}</small></p>
                        <h5><strong>$ {price}</strong> </h5>
                    </div>
                </div>
            </div>

            <div className="container mb-5 text-center mt-5">
            <h5 className=" fw-bold mt-5 mb-4">Your Personal Information</h5>
            <form className="info-form" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("UserName")} placeholder="Name" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("UserEmail" , { required: true })} value={user.email} className="p-2 m-2 w-50"/>
                <br />
                <input {...register("address" , { required: true })} placeholder="Address" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("phone" , { required: true })} placeholder="Phone no" className="p-2 m-2 w-50"/>
                <br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="Book" className="btn book-btn"/>
            </form>
        </div>



        </div>
    );
};

export default TourDetails;