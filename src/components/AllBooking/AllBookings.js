import React, { useEffect, useState } from 'react';
import './AllBooking.css';
const AllBooking = () => {
    const [booking, setBooking] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            
            setBooking(data);
        })
    },[]);
    

    const handleDeleteBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/users/${id}`;
        fetch((url),{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('DELETED SUCCESSFULLY');
            const remainingUser = booking.filter(user => user._id !== id);
            setBooking(remainingUser);
        })
        }
    }

    return (
        <div>
           <h4> All Bookings </h4>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        booking.map(user => <div key={user._id} className="col-4">
                                <div className="user-info">
                                <p>Name: {user.UserName}</p>
                                <p>Email: {user.UserEmail}</p>
                                <p>Booking ID: {user.bookingID}</p>
                                <button onClick={()=>handleDeleteBooking(user._id)} className="delete-btn">Delete User</button>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
           </div>

        </div>
    );
};

export default AllBooking;