import React, { useEffect, useState } from 'react';
import './MyBooking.css';
const MyBooking = () => {
    const [users, serUsers] = useState([]);
    // const {UserName, UserName, bookingID} = user;
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            
            serUsers(data);
        })
    },[]);
    
    





    return (
        <div>
           <h1> All Bookings </h1>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        users.map(user => <div className="col-4">
                                <div className="user-info">
                                <p>Name: {user.UserName}</p>
                                <p>Email: {user.UserEmail}</p>
                                <p>Booking ID: {user.bookingID}</p>
                                <button className="btn btn-warning">Delete User</button>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
           </div>

        </div>
    );
};

export default MyBooking;