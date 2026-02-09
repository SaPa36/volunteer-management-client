import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NeedVolunteer from './NeedVolunteer';

const NeedVolunteers = () => {
    const posts = useLoaderData();

    return (
        <div className="min-h-screen bg-slate-50 mt-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
                        Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Needs</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-orange-500 mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-4 font-medium italic">
                        Join our community and make a difference today
                    </p>
                </div>

                {/* Cards Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            posts.map((post, index) => (
                                <NeedVolunteer 
                                    key={post._id} 
                                    post={post}
                                    index={index + 1}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-xl font-bold">No active volunteer needs found.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NeedVolunteers;