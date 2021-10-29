import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './TourPackages.css';

const TourPackages = () => {
    const [tours, settours] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/addTour')
        .then(res=>res.json())
        .then(data=>settours(data));
    },[]);

    return (
        <div>
            <div className="text-center">
                <h1 className="coutses-title">Perfect Tour Packages</h1>
                <p>Travel has helped us to understand the meaning of life and it has helped us become better people. <br /> Each time we travel, we see the world with new eyes.</p>
            </div>
            <div className="row g-4 m-5 mt-0">
                {
                    tours.map((tour=><Tour
                        key={tour.key}
                        cors={tour}>
                        </Tour>))
                }
            </div>
        </div>
    );
};

export default TourPackages;