import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VolunteerCard = ({ volunteerPost, index }) => {
    const { _id, thumbnail, category, deadline, title, location, volunteersNeeded } = volunteerPost;

    // Logic for Status
    const isUrgent = volunteersNeeded > 10;

    return (
        <div className="group bg-white rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_rgba(99,102,241,0.2)] transition-all duration-500 overflow-hidden flex flex-col h-full">
            
            {/* Image Section */}
            <div className="relative h-52 w-full overflow-hidden">
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-indigo-600 border border-indigo-50">
                        {category}
                    </span>
                </div>
                <div className="absolute bottom-4 right-4">
                    <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg shadow-lg">
                        {volunteersNeeded} spots left
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow relative">
                
                {/* STATUS PART: Placed in the body space you circled */}
                <div className="absolute top-6 right-6">
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isUrgent 
                        ? 'bg-red-50 text-red-600 border border-red-100' 
                        : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>
                        {isUrgent ? <FaExclamationCircle className="animate-pulse" /> : <FaCheckCircle />}
                        {isUrgent ? 'Urgent' : 'Active'}
                    </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold mb-3">
                    <FaCalendarAlt className="text-indigo-400" />
                    <span>Deadline: {new Date(deadline).toLocaleDateString('en-GB')}</span>
                </div>

                <h3 className="text-xl font-black text-slate-800 mb-2 leading-tight group-hover:text-indigo-600 transition-colors max-w-[70%]">
                    {title}
                </h3>

                <div className="flex items-center gap-1 text-slate-500 text-sm mb-6">
                    <FaMapMarkerAlt className="text-orange-400" />
                    <span className="truncate">{location}</span>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link 
                        to={`/post-details/${_id}`} 
                        className="flex items-center gap-1 text-indigo-600 font-black text-sm group/btn"
                    >
                        View Details 
                        <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex flex-col items-end leading-none">
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-tighter mb-1">Impact</span>
                            <span className="text-[10px] font-bold text-indigo-600">Community Lead</span>
                        </div>
                        <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner group-hover:bg-indigo-50 transition-colors">
                            <span className="text-xs font-black text-indigo-500">#{index}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;