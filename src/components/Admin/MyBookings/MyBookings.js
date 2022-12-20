import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css';
const MyBookings = () => {
    const {user} = useAuth();
    const [Bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch('https://travel-ride-server.onrender.com/bookings')
        .then(res=>res.json())
        .then(data=>{
            setBookings(data);
        })
    },[]);

    useEffect(()=>{
        fetch('https://travel-ride-server.onrender.com/bookings')
        .then(res=>res.json())
        .then(data=>{
            const booking = data.filter(book =>
                book?.UserEmail === user.email
                );
                setBookings(booking);
        })
    },[user.email]);


const handleDeleteBooking = id =>{
    const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://travel-ride-server.onrender.com/bookings/${id}`;
        fetch((url),{
            method: 'DELETE',
        })
        .then(res=>res.json())
        .then(data=>{
            alert('DELETED SUCCESSFULLY');
            const remainingUser = Bookings.filter(user => user._id !== id);
            setBookings(remainingUser);
        })
        }
}
    return (
        <div>
           <h4 className="fw-bold mt-4 mb-5"> My Bookings</h4>

           <div className="m-md-4">
                <div className="row g-4">
                    {
                        Bookings.map(book => <div key={book._id} className="col-4">
                                <div className="user-info">
                                <p>Name: {book.UserName}</p>
                                <p>Email: {book.UserEmail}</p>
                                <p>Booking ID: {book.bookingID}</p>
                                <button onClick={()=>handleDeleteBooking(book._id)} className="btn signIn-btn">Delete Booking</button>
                                </div>
                            </div>
                            
                        )
                    }
                </div>
           </div>

        </div>
    );
};

export default MyBookings;