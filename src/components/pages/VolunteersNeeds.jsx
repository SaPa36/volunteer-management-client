import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import VolunteerCard from './VolunteerCard';
import { FaArrowRight } from 'react-icons/fa';

const VolunteersNeeds = () => {
    const loadedVolunteersPosts = useLoaderData();
    const [volunteerPosts] = useState(loadedVolunteersPosts || []);

    // Logic: Only render if there are posts to show
    if (volunteerPosts.length === 0) return null;

    // Display only the first 6 cards for this section
    const displayPosts = volunteerPosts.slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-black text-slate-800 mb-4 tracking-tight">
                    Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Needs</span>
                </h2>
                <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-orange-500 mx-auto rounded-full"></div>
                <p className="text-slate-500 mt-4 font-medium italic">Join our community and make a difference today</p>
            </div>

            {/* Cards Grid - Fixed 3-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {
                    displayPosts.map((volunteerPost, index) => (
                        <VolunteerCard 
                            key={volunteerPost._id} 
                            volunteerPost={volunteerPost}
                            index={index + 1}
                        />
                    ))
                }
            </div>

            {/* View All Button - Visible only if there are more than 6 posts */}
            {volunteerPosts.length > 6 && (
                <div className="flex justify-center mt-16">
                    <Link to="/need-volunteer">
                        <button className="group relative flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-2xl hover:bg-indigo-600 transition-all active:scale-95">
                            View All Opportunities
                            <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            <div className="absolute inset-0 rounded-2xl bg-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default VolunteersNeeds;