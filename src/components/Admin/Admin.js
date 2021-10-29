import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddTour from '../AddTour/AddTour';
import MyBooking from '../MyBooking/MyBooking';
import './Admin.css';
const Admin = () => {
    const [control, setControl] = useState("");
    return (
        
        <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
        <div className="admin-dashboard">
            <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area p-1">
                <h6>Dashboard</h6>
                <div className="all-menu mt-5">
                  {/* <li
                    onClick={() => setControl("volunteers")}
                    className="admin-menu p-2"
                  >
                    All Volunteers
                  </li> */}
                  <li
                    onClick={() => setControl("addTour")}
                    className="admin-menu p-2"
                  >
                    Add Tour
                  </li>
                  <li
                    onClick={() => setControl("MyBooking")}
                    className="admin-menu p-2"
                  >
                    My Bookings
                  </li>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center  text-center">
              <div className="right-part ">
                {control === "addTour" && <AddTour></AddTour>}
                {control === "MyBooking" && <MyBooking></MyBooking>}
                {/* {control === "volunteers" && <AllVolunteer></AllVolunteer>} */}
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