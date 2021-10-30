import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTour from '../AddTour/AddTour';
import AllBooking from '../AllBooking/AllBookings';
import './Admin.css';
import MyBookings from './MyBookings/MyBookings';
const Admin = () => {
    const [control, setControl] = useState("addTour");
    return (
        
        <div className="admin-container">
          <div className="dashboard">
            <div className="admin-box">
            <div className="admin-dashboard">
                <div className="row admin-container">
                    <div className="col-md-3 ">
                      <div className="admin-area p-1">
                        <h4 className="dashboard-title">Dashboard</h4>
                        <div className="all-menu mt-5">
                          <li
                            onClick={() => setControl("myBookings")}
                            className="admin-menu p-2"
                          >
                            My Bookings
                          </li>
                          <li
                            onClick={() => setControl("addTour")}
                            className="admin-menu p-2"
                          >
                            Add Tour
                          </li>
                          <li
                            onClick={() => setControl("manage")}
                            className="admin-menu p-2"
                          >
                            Manage All Bookings
                          </li>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-9 text-center  text-center">
                      <div className="right-part ">
                        {control === "addTour" && <AddTour></AddTour>}
                        {control === "manage" && <AllBooking></AllBooking>}
                        {control === "myBookings" && <MyBookings></MyBookings>}
                      </div>
                    </div>
                 </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Admin;