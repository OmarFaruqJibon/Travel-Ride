import React, { useEffect, useState } from 'react';

const MyBooking = () => {
    const [users, serUser] = useState({});
    // const {UserName, UserName, bookingID} = user;
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            serUser(data);
        })
    },[]);







    return (
        <div>
           <h1> All Bookings </h1>
           <div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Booking ID</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>{users.UserName}</td>
                    <td>{users.UserEmail}</td>
                    <td>{users.bookingID}</td>
                    </tr>
                </tbody>
            </table>

        

           </div>

        </div>
    );
};

export default MyBooking;