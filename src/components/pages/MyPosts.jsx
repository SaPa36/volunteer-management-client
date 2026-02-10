import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const MyPosts = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://volunteer-management-server-bay.vercel.app/my-volunteer-posts/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyPosts(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This mission will be permanently deleted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#4f46e5',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://volunteer-management-server-bay.vercel.app/volunteers-posts/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire('Deleted!', 'Post removed.', 'success');
                        setMyPosts(myPosts.filter(post => post._id !== id));
                    }
                });
            }
        });
    };

    if (loading) return (
        <div className="min-h-screen flex justify-center items-center bg-slate-100">
            <span className="loading loading-bars loading-lg text-indigo-600"></span>
        </div>
    );

    return (
        /* Added bg-slate-100 to the main container so the white table "pops" out */
        <div className="min-h-screen bg-slate-100 py-16 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto">
                
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="text-4xl font-black text-slate-800 tracking-tight">
                            Manage My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Volunteer Posts</span>
                        </h2>
                        <p className="text-slate-500 font-medium mt-2">Update or remove your current volunteering opportunities.</p>
                    </div>
                    <Link to="/add-volunteer" className="btn  bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:bg-indigo-700 text-white border-none rounded-xl px-6">
                        + Add New Post
                    </Link>
                </div>

                {/* Main Table Container: Added border-2 and heavy shadow-2xl */}
                <div className="bg-white rounded-[2rem] shadow-2xl border-2 border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            {/* Header with deep slate background to contrast the white body */}
                            <thead>
                                <tr className="bg-slate-800 text-white">
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em]">Post Info</th>
                                    <th className="px-6 py-6 text-xs font-black uppercase tracking-[0.2em]">Category</th>
                                    <th className="px-6 py-6 text-xs font-black uppercase tracking-[0.2em]">Deadline</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase tracking-[0.2em] text-center">Actions</th>
                                </tr>
                            </thead>
                            
                            <tbody className="divide-y-2 divide-slate-100">
                                {myPosts.map((post) => (
                                    <tr key={post._id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="space-y-1">
                                                <p className="font-bold text-slate-800 text-lg leading-tight">{post.title}</p>
                                                <div className="flex items-center text-slate-500 text-sm font-medium">
                                                    <FaMapMarkerAlt className="mr-1.5 text-indigo-500" />
                                                    {post.location}
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className="px-6 py-6">
                                            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold uppercase border border-indigo-100">
                                                {post.category}
                                            </span>
                                        </td>

                                        <td className="px-6 py-6">
                                            <div className="flex items-center text-slate-600 font-semibold">
                                                <FaCalendarAlt className="mr-2 text-slate-400" />
                                                {new Date(post.deadline).toLocaleDateString('en-GB')}
                                            </div>
                                        </td>

                                        <td className="px-8 py-6">
                                            <div className="flex justify-center gap-3">
                                                <Link 
                                                    to={`/update-post/${post._id}`}
                                                    className="p-3 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-sm border border-blue-100"
                                                >
                                                    <FaEdit size={18} />
                                                </Link>
                                                <button 
                                                    onClick={() => handleDelete(post._id)}
                                                    className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm border border-red-100"
                                                >
                                                    <FaTrashAlt size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {myPosts.length === 0 && (
                        <div className="py-24 text-center bg-white">
                            <div className="text-slate-300 mb-4 flex justify-center">
                                <FaTrashAlt size={48} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">No Volunteer Posts Yet</h3>
                            <p className="text-slate-500 mt-2">Your created missions will appear here.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyPosts;