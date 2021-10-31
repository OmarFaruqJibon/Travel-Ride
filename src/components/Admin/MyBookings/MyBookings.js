import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyBookings.css';
const MyBookings = () => {
    const {user} = useAuth();
    console.log('user: ',user.email);

    const [Bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch('https://rocky-headland-86423.herokuapp.com/bookings')
        .then(res=>res.json())
        .then(data=>{
            setBookings(data);
        })
    },[]);

    useEffect(()=>{
        fetch('https://rocky-headland-86423.herokuapp.com/bookings')
        .then(res=>res.json())
        .then(data=>{
            const booking = data.filter(book =>
                book?.UserEmail === user.email
                );
                setBookings(booking);
        })
    },[user.email]);


    console.log('bookings : ',Bookings[0]?.UserEmail);

const handleDeleteBooking = id =>{

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
                                <button onClick={()=>handleDeleteBooking(book._id)} className="btn btn-warning">Delete Booking</button>
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