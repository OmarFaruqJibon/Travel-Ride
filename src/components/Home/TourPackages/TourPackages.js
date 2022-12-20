import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './TourPackages.css';

const TourPackages = () => {
    const [tours, settours] = useState([]);
    useEffect( () => {
        fetch('https://travel-ride-server.onrender.com/addTour')
        .then(res=>res.json())
        .then(data=>settours(data));
    },[]);

    return (
        <div>
            <div className="text-center">
                <h1 className="coutses-title mb-3">Perfect Tour <span>Packages</span></h1>
                <p><small>Travel has helped us to understand the meaning of life and it has helped us become better people. <br /> Each time we travel, we see the world with new eyes.</small></p>
            </div>

            <div className="row g-4 m-5 mt-0">
                {
                    tours.map((tour=><Tour
                        key={tour._id}
                        cors={tour}>
                        </Tour>))
                }
            </div>
        </div>
    );
};

export default TourPackages;