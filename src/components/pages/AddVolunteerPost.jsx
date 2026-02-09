import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const AddVolunteerPost = () => {
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleAddVolunteer = (e) => {
        e.preventDefault();
        const form = e.target;

        const newPost = {
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

        console.log(newPost);
        toast.success("Volunteer Post Created!");
        form.reset();


        //add to database
        fetch('https://volunteer-management-server-bay.vercel.app/volunteers-posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
                toast.error("Failed to create post");
            }
            )
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 flex justify-center items-center">
            {/* High-contrast shadow to separate from background */}
            <div className="w-full max-w-3xl bg-white rounded-[2.5rem] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] border border-slate-200 overflow-hidden">

                {/* Brand Gradient Header */}
                <div className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f97316] py-8 px-10 text-center text-white">
                    <h2 className="text-3xl font-black tracking-tight">Create Post</h2>
                    <p className="text-xs font-bold text-indigo-100 uppercase tracking-widest mt-1 opacity-90">Volunteer Need Details</p>
                </div>

                <form onSubmit={handleAddVolunteer} className="p-8 md:p-12 space-y-6">

                    {/* Consistent 2-Column Grid for ALL inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">

                        {/* Row 1: Thumbnail & Title */}
                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Thumbnail URL</label>
                            <input type="text" name="thumbnail" placeholder="https://..." className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-slate-700" required />
                        </div>

                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Post Title</label>
                            <input type="text" name="title" placeholder="Enter title" className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all outline-none text-slate-700" required />
                        </div>

                        {/* Row 2: Category & Location */}
                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Category</label>
                            <select name="category" className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 transition-all outline-none text-slate-700 font-medium appearance-none">
                                <option value="healthcare">Healthcare</option>
                                <option value="education">Education</option>
                                <option value="social service">Social Service</option>
                                <option value="animal welfare">Animal Welfare</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Location</label>
                            <input type="text" name="location" placeholder="City, Country" className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 transition-all outline-none text-slate-700" required />
                        </div>

                        {/* Row 3: Volunteers & Deadline */}
                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Volunteers Needed</label>
                            <input type="number" name="volunteersNeeded" placeholder="Quantity" className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 transition-all outline-none text-slate-700" required />
                        </div>

                        <div>
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Deadline</label>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 transition-all outline-none text-slate-700"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>

                        {/* Row 4: Organizer Badges */}
                        <div className="bg-indigo-50 border-2 border-indigo-100 p-3 rounded-xl">
                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-0.5">Organizer</span>
                            <p className="text-slate-700 font-bold text-sm">{user?.displayName}</p>
                        </div>
                        <div className="bg-orange-50 border-2 border-orange-100 p-3 rounded-xl overflow-hidden">
                            <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest block mb-0.5">Contact Email</span>
                            <p className="text-slate-700 font-bold text-sm truncate">{user?.email}</p>
                        </div>

                        {/* Row 5: Description (Spans Full Width at Bottom) */}
                        <div className="md:col-span-2">
                            <label className="text-xs font-black text-slate-500 uppercase tracking-wider ml-1 mb-2 block">Mission Description</label>
                            <textarea name="description" className="w-full px-4 py-3 rounded-xl bg-white border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 transition-all outline-none h-32 resize-none text-slate-700" placeholder="Tell us about the volunteering opportunity..." required></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full py-4 mt-4 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f97316] text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:brightness-110 active:scale-[0.98] transition-all">
                        Publish Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddVolunteerPost;