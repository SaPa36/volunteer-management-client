import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaCalendarAlt, FaUserTie, FaMapMarkerAlt, FaHandsHelping } from 'react-icons/fa';

const MyVolunteerRequests = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://volunteer-management-server-bay.vercel.app/my-volunteer-requests/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log("Full Data from MongoDB:", data); // Check your browser console to see the keys!
                    setRequests(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Fetch error:", err);
                    setLoading(false);
                });
        }
    }, [user?.email]);

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to cancel your volunteer request?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ef4444',
            cancelButtonColor: '#64748b',
            confirmButtonText: 'Yes, cancel it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-management-server-bay.vercel.app/volunteer-requests/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire('Cancelled!', 'Your request has been removed.', 'success');
                        setRequests(requests.filter(req => req._id !== id));
                    }
                });
            }
        });
    };

    if (loading) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-lg text-indigo-600"></span></div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-slate-800 tracking-tight italic">
                            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Volunteer Requests</span>
                        </h2>
                        <p className="text-slate-500 font-medium mt-2">Missions you have applied to join.</p>
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                        <FaHandsHelping /> Total Requests: {requests.length}
                    </div>
                </div>

                <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden">
                    {requests.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest">Mission Name</th>
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest">Organizer</th>
                                        <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest">Deadline</th>
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {requests.map((req, index) => (
                                        <tr key={req._id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'} hover:bg-indigo-50/30 transition-colors`}>
                                            <td className="px-8 py-6">
                                                <p className="font-bold text-slate-800 text-lg">{req.title}</p>
                                                <div className="flex items-center text-slate-400 text-xs mt-1 font-semibold uppercase tracking-tighter">
                                                    <FaMapMarkerAlt className="mr-1 text-indigo-400" /> {req.location || 'Not Specified'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-slate-600 font-medium italic text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FaUserTie className="text-indigo-400" /> 
                                                    {/* FIX: Using underscore here to match your Database */}
                                                    {req.organizer_name || "Unknown"} 
                                                </div>
                                            </td>
                                            <td className="px-6 py-6 text-slate-600 font-bold text-sm">
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-slate-400" /> 
                                                    {new Date(req.deadline).toLocaleDateString('en-GB')}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-center">
                                                <button 
                                                    onClick={() => handleCancel(req._id)}
                                                    className="px-5 py-2.5 bg-rose-50 text-rose-600 rounded-xl hover:bg-rose-600 hover:text-white transition-all font-black text-xs uppercase tracking-widest border border-rose-100 shadow-sm"
                                                >
                                                    Cancel Request
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="py-24 text-center">
                            <h3 className="text-2xl font-bold text-slate-300 italic">No volunteer requests found.</h3>
                            <p className="text-slate-400">Apply for a position to see it here!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyVolunteerRequests;