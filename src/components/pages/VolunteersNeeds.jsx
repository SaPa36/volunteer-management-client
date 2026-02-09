import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import VolunteerCard from './VolunteerCard';

const VolunteersNeeds = () => {

    const loadedVolunteersPosts = useLoaderData();

    const [volunteerPosts, setVolunteerPosts] = useState(loadedVolunteersPosts || []);
    return (
        <div>
            <h2>Volunteer Needs </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-10 mt-8 mb-16 mr-10">
                {
                    volunteerPosts.map((volunteerPost, index) => <VolunteerCard 
                    key={volunteerPost._id} 
                    volunteerPost={volunteerPost}
                    index={index + 1}
                    ></VolunteerCard>)
                }
            </div>



        </div>
    );
};

export default VolunteersNeeds;