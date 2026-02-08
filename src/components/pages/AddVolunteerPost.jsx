import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const AddVolunteerPost = () => {
    const { user } = useContext(AuthContext); // Sourcing user data from global state
    const [startDate, setStartDate] = useState(new Date());

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        
        const formData = {
            thumbnail: form.thumbnail.value,
            title: form.title.value,
            description: form.description.value,
            category: form.category.value,
            location: form.location.value,
            volunteersNeeded: parseInt(form.volunteersNeeded.value),
            deadline: startDate,
            organizerName: user?.displayName,
            organizerEmail: user?.email
        };

        console.log(formData);
        toast.success("Post Created Successfully!");
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-center">
            {/* Decreased max-width to max-w-2xl for a more compact look */}
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-[0_20px_50px_rgba(99,102,241,0.15)] border border-slate-100 overflow-hidden">
                
                {/* Slimmer Header with the same gradient */}
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 py-6 px-8 text-center text-white">
                    <h2 className="text-2xl font-black tracking-tight">Create Post</h2>
                    <p className="text-xs text-indigo-100 opacity-80 uppercase tracking-widest mt-1">Volunteer Need Details</p>
                </div>

                <form onSubmit={handleAddPost} className="p-6 md:p-8 space-y-5">
                    
                    {/* Compact Grid Structure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        
                        {/* Thumbnail - Full Width */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Thumbnail URL</label>
                            <input 
                                type="url" 
                                name="thumbnail" 
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Title - Full Width */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Post Title</label>
                            <input 
                                type="text" 
                                name="title" 
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Description - Full Width */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Description</label>
                            <textarea 
                                name="description" 
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all outline-none h-24 resize-none text-sm" 
                                required 
                            ></textarea>
                        </div>

                        {/* Category */}
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Category</label>
                            <select name="category" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all outline-none text-sm">
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="social service">Social Service</option>
                                <option value="animal welfare">Animal Welfare</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Location</label>
                            <input type="text" name="location" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all outline-none text-sm" required />
                        </div>

                        {/* Volunteers Needed */}
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Volunteers Needed</label>
                            <input type="number" name="volunteersNeeded" min="1" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all outline-none text-sm" required />
                        </div>

                        {/* Deadline */}
                        <div>
                            <label className="text-xs font-bold text-slate-500 uppercase ml-1 mb-1.5 block">Deadline</label>
                            <DatePicker 
                                selected={startDate} 
                                onChange={(date) => setStartDate(date)} 
                                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-400 transition-all outline-none text-sm"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>

                        {/* Organizer Info (Read-Only Badges) */}
                        <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">
                            <div className="flex-1 bg-indigo-50/50 p-3 rounded-lg border border-indigo-100">
                                <span className="text-[10px] font-black uppercase text-indigo-400 block mb-0.5">Organizer</span>
                                <p className="text-slate-700 font-bold text-xs">{user?.displayName || "Loading..."}</p>
                            </div>
                            <div className="flex-1 bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                                <span className="text-[10px] font-black uppercase text-orange-400 block mb-0.5">Email</span>
                                <p className="text-slate-700 font-bold text-xs">{user?.email || "Loading..."}</p>
                            </div>
                        </div>
                    </div>

                    {/* Compact Submit Button */}
                    <button className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-black text-sm uppercase tracking-widest rounded-xl hover:brightness-110 shadow-lg transition-all active:scale-95">
                        Publish Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;