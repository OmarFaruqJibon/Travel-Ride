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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // booking information-------------------------------------------
    const url = `http://localhost:5000/tourDetails/${tourId}`;
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
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    }







    return (
        <div className="container">
            <div>
                <h2>Booking Details</h2>
                <div className="row g-md-5">
                    <div className="col-md-6 col-12 p-3">
                        <img className="w-100" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-12 p-3">
                        <h3>{title}</h3>
                        <p><small>About Tour: {description}</small></p>
                        <p><small>Duration: {duration}</small></p>
                        <p><small>Rating: {rating}</small></p>
                        <h5>$ {price}</h5>
                    </div>
                </div>
            </div>

            <div className="container mb-5 text-center mt-5">
            <h1>Add a new Tour</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("UserName")} placeholder="Name" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("UserEmail" , { required: true })} value={user.email} className="p-2 m-2 w-50"/>
                <br />
                <input {...register("address" , { required: true })} placeholder="Address" className="p-2 m-2 w-50"/>
                <br />
                <input {...register("phone" , { required: true })} placeholder="Phone no" className="p-2 m-2 w-50"/>
                <br />
                
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" value="ADD" className="btn btn-primary"/>
            </form>
        </div>









        </div>
    );
};

export default TourDetails;