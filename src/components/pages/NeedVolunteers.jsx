import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NeedVolunteer from './NeedVolunteer';
import { FaSearch } from 'react-icons/fa';

const NeedVolunteers = () => {
    const initialPosts = useLoaderData(); // Initial load from route loader
    const [posts, setPosts] = useState(initialPosts);
    const [searchText, setSearchText] = useState('');

    // Handle search logic
    // Inside NeedVolunteers.jsx

    const handleSearch = () => {
        // If search text is empty, just fetch all data or use initialPosts
        const url = searchText
            ? `https://volunteer-management-server-bay.vercel.app/volunteers-posts?search=${searchText}`
            : `https://volunteer-management-server-bay.vercel.app/volunteers-posts`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    };

    // Optional: Search when user presses "Enter" key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    // Update your input in the return statement:
    <input
        type="text"
        placeholder="Search by Post Title..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleKeyPress} // Add this
        className="w-full px-5 py-3 rounded-l-2xl border-2 border-r-0 border-indigo-100 focus:border-indigo-500 outline-none transition-all text-slate-600 font-medium"
    />

    return (
        <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
                        Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Needs</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Search Bar Implementation */}
                <div className="flex justify-center mb-12">
                    <div className="flex w-full max-w-md shadow-sm">
                        <input
                            type="text"
                            placeholder="Search by Post Title..."
                            onChange={(e) => setSearchText(e.target.value)}
                            className="w-full px-5 py-3 rounded-l-2xl border-2 border-r-0 border-indigo-100 focus:border-indigo-500 outline-none transition-all text-slate-600 font-medium"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 rounded-r-2xl transition-colors flex items-center gap-2 font-bold"
                        >
                            <FaSearch /> Search
                        </button>
                    </div>
                </div>

                {/* Cards Grid */}
                {posts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, index) => (
                            <NeedVolunteer
                                key={post._id}
                                post={post}
                                index={index + 1}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-slate-400 text-xl font-bold italic">No missions found matching "{searchText}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NeedVolunteers;