import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaMapMarkerAlt, FaCalendarAlt, FaUserEdit, FaTag, FaUsers, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';

const PostDetails = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);

    const organizer_name = user?.displayName || "Admin User";

    const organizer_email = user?.email || "admin@example.com";

    if (!post) {
        return (
            <div className="min-h-screen bg-[#060910] flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-cyan-500"></div>
            </div>
        );
    }

    // Pulling data from the post object
    const {
        _id, 
        thumbnail, title, description, category, location, 
        volunteersNeeded, deadline, 
        
    } = post;

    return (
        <div className="min-h-screen  py-10 px-4 flex items-center justify-center selection:bg-cyan-500/30">
            {/* Main Container: 
                - Removed min-h-[550px] to collapse empty spaces.
                - flex-col for mobile, flex-row for desktop.
            */}
            <div className="max-w-6xl w-full bg-[#0B0F19] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
                
                {/* LEFT SIDE: Image Section 
                    - h-full and object-cover ensures the image fills the left side without gaps.
                */}
                <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full">
                    <img 
                        src={thumbnail} 
                        alt={title} 
                        className="w-full h-full object-cover block" 
                    />
                    {/* Gradient Overlay for style and readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B0F19] hidden lg:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent lg:hidden"></div>
                    
                    <div className="absolute bottom-6 left-6">
                        <span className="px-3 py-1 bg-cyan-600 text-white text-[10px] font-black uppercase rounded-lg tracking-widest shadow-xl">
                             {category}
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE: Content Section
                    - Removed justify-between to collapse the vertical gap.
                */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col gap-6">
                    
                    {/* Header & Title */}
                    <div className="space-y-2">
                        <p className="text-fuchsia-500 text-[11px] font-black uppercase tracking-widest flex items-center gap-1">
                            <FaMapMarkerAlt /> {location}
                        </p>
                        <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-orange-400 bg-clip-text text-transparent leading-tight italic">
                            {title}
                        </h1>
                        <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full mt-2"></div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
                            <FaUsers className="text-cyan-400 text-xl mb-1" />
                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Slots Available</p>
                            <p className="text-white text-lg font-black">{volunteersNeeded} Posts</p>
                        </div>
                        <div className="bg-white/[0.03] border border-white/5 p-4 rounded-2xl">
                            <FaCalendarAlt className="text-fuchsia-400 text-xl mb-1" />
                            <p className="text-[9px] text-gray-500 font-black uppercase tracking-wider">Target Date</p>
                            <p className="text-white text-lg font-black">{new Date(deadline).toLocaleDateString()}</p>
                        </div>
                    </div>

                    {/* Organizer Profile & Action Button 
                        - These are now tightly packed under the stats grid.
                    */}
                    <div className="pt-6 border-t border-white/5 space-y-5">
                        <div className="flex items-center gap-4">
                            {/* Organizer Avatar */}
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white text-lg shadow-inner">
                                <FaUserEdit />
                            </div>
                            
                            {/* Organizer Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                    <p className="text-white font-black text-base truncate">
                                        {organizer_name || "Official Organizer"}
                                    </p>
                                    <FaCheckCircle className="text-cyan-500 text-[10px]" />
                                </div>
                                <p className="text-gray-500 text-xs truncate">
                                    {organizer_email}
                                </p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Link to={`/be-a-volunteer/${_id}`} className="w-full">
                            <button className='bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 text-white hover:brightness-110 active:scale-[0.98] w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-2 shadow-2xl shadow-indigo-500/10'>
                            Be a Volunteer <FaHandsHelping className="text-base" />
                        </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostDetails;