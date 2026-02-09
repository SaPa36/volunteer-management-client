import React from 'react';
import Banner from './Banner';
import VolunteerNeeds from './VolunteersNeeds';
import ImpactStats from './ImpactStats';
import WhyVolunteer from './WhyVolunteer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <VolunteerNeeds></VolunteerNeeds>
            <ImpactStats></ImpactStats>
            <WhyVolunteer></WhyVolunteer>
        </div>
    );
};

export default Home;