import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaHandsHelping, FaLock, FaUserCircle, FaMapMarkerAlt } from 'react-icons/fa';

const BeAVolunteer = () => {
    const post = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Destructure all data from the database post
    const { 
        _id, 
        thumbnail, 
        title, 
        description, 
        category, 
        location, 
        volunteersNeeded, 
        deadline, 
        organizer_name, 
        organizer_email 
    } = post;

    const handleRequestSubmission = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const suggestion = form.suggestion.value;
        const status = "requested"; 

        const volunteerRequest = {
            postId: _id,
            thumbnail,
            title,
            description,
            category,
            location,
            volunteersNeeded,
            deadline,
            organizer_name,
            organizer_email,
            volunteer_name: user?.displayName,
            volunteer_email: user?.email,
            suggestion,
            status
        };

        try {
            const response = await fetch('https://your-server-repo.vercel.app/volunteerRequests', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(volunteerRequest)
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Request Successful!',
                    text: 'Slots updated and request recorded.',
                    icon: 'success',
                    background: '#0B0F19',
                    color: '#fff',
                    confirmButtonColor: '#06b6d4'
                });
                navigate('/my-volunteer-requested-posts');
            }
        } catch (error) {
            console.error("Error submitting request:", error);
        }
    };

    return (
        <div className="min-h-screen  py-12 px-4 flex items-center justify-center">
            <div className="max-w-6xl w-full bg-[#0B0F19] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                
                <form onSubmit={handleRequestSubmission} className="flex flex-col lg:flex-row min-h-[600px]">
                    
                    {/* LEFT SIDE: Mission Context (Read-Only) */}
                    <div className="lg:w-5/12 p-8 lg:p-12 bg-white/[0.02] border-r border-white/5 space-y-6">
                        <div className="flex items-center gap-2 text-cyan-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <FaLock /> Mission Profile
                        </div>

                        <div className="relative h-48 rounded-3xl overflow-hidden border border-white/10 shadow-inner">
                            <img src={thumbnail} alt={title} className="w-full h-full object-cover opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 text-3xl font-black italic">{title}</h1>
                                <p className="text-fuchsia-500 text-xs font-bold mt-1 flex items-center gap-1">
                                    <FaMapMarkerAlt /> {location}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <label className="text-[9px] text-gray-500 font-bold uppercase">Slots</label>
                                    <p className="text-white font-black">{volunteersNeeded}</p>
                                </div>
                                <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                                    <label className="text-[9px] text-gray-500 font-bold uppercase">Category</label>
                                    <p className="text-cyan-400 font-black truncate text-xs">{category}</p>
                                </div>
                            </div>

                            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/5">
                                <label className="text-[9px] text-gray-500 font-bold uppercase">Description</label>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{description}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <label className="text-[9px] text-gray-500 font-bold uppercase">Organizer Details</label>
                            <p className="text-white text-xs font-bold">{organizer_name}</p>
                            <p className="text-gray-500 text-[10px] italic">{organizer_email}</p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Volunteer Interaction */}
                    <div className="lg:w-7/12 p-8 lg:p-14 space-y-8 flex flex-col justify-center">
                        <div className="space-y-2">
                            <h2 className="text-4xl lg:text-5xl font-black text-white italic tracking-tight">Be a 
                                <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500'> Volunteer</span>
                            </h2>
                            <p className="text-gray-500 text-sm">Submit your request to join this mission. Slots update automatically.</p>
                        </div>

                        {/* User Identity (Read-only) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest ml-1">My Name</label>
                                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 p-4 rounded-2xl text-white/50 text-sm font-semibold">
                                    <FaUserCircle className="text-cyan-500 text-lg" /> {user?.displayName}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-400 font-black uppercase tracking-widest ml-1">My Email</label>
                                <div className="bg-white/[0.04] border border-white/10 p-4 rounded-2xl text-white/50 text-sm italic overflow-hidden truncate">
                                    {user?.email}
                                </div>
                            </div>
                        </div>

                        {/* Editable Field */}
                        <div className="space-y-2">
                            <label className="text-[10px] text-cyan-500 font-black uppercase tracking-widest ml-1">Your Suggestion</label>
                            <textarea 
                                name="suggestion"
                                required
                                placeholder="Write a short note to the organizer about your interest..."
                                className="w-full bg-white/[0.06] border border-white/10 p-6 rounded-[2rem] text-white text-sm focus:border-cyan-500 outline-none h-40 transition-all resize-none shadow-inner"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            className="w-full py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 text-white font-black uppercase tracking-[0.4em] text-[11px] rounded-[1.5rem] shadow-2xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                        >
                            Confirm & Request <FaHandsHelping className="text-xl" />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default BeAVolunteer;