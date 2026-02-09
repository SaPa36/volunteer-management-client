import React from 'react';
import Banner from './Banner';
import VolunteerNeeds from './VolunteersNeeds';
import ImpactStats from './ImpactStats';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeeds></VolunteerNeeds>
            <ImpactStats></ImpactStats>
        </div>
    );
};

export default Home;