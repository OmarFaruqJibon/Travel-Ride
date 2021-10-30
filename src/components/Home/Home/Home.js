import React from 'react';
import HomeTop from '../HomeTop/HomeTop';
import Pricing from '../Pricing/Pricing';
import TourPackages from '../TourPackages/TourPackages';

const Home = () => {
    return (
        <div>
            <HomeTop></HomeTop>
            <TourPackages></TourPackages>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;