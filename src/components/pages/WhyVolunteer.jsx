import { FaHeart, FaStar, FaGlobe } from 'react-icons/fa';

const WhyVolunteer = () => {
    const benefits = [
        { 
            icon: <FaHeart className="text-red-500" />, 
            title: "Give Back", 
            desc: "Make a real difference in the lives of those who need it most in your local community.",
            benefitId: "01"
        },
        { 
            icon: <FaStar className="text-yellow-500" />, 
            title: "Learn Skills", 
            desc: "Gain valuable experience and professional skills that look great on your resume.",
            benefitId: "02"
        },
        { 
            icon: <FaGlobe className="text-indigo-500" />, 
            title: "Network", 
            desc: "Meet like-minded people and build a network of passionate, community-driven friends.",
            benefitId: "03"
        }
    ];

    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center ">
                    <h2 className="text-4xl mb-4  font-black text-slate-900 tracking-tight">
                        Why Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Mission?</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-orange-500 mx-auto rounded-full"></div>
                    <p className="text-slate-500 mt-8 max-w-2xl mx-auto font-semibold text-lg leading-relaxed px-4">
                        Helping others is the most rewarding work you'll ever do. 
                        Here’s why our volunteers love what they do.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {benefits.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group relative bg-white p-5 rounded-[3.5rem] shadow-2xl hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.2)] transition-all duration-500 flex flex-col items-center text-center border border-slate-50"
                        >
                            {/* Icon Container with subtle inner shadow */}
                            <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-4xl  shadow-inner group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            
                            <h3 className="text-2xl font-black text-slate-800  group-hover:text-indigo-600 transition-colors">
                                {item.title}
                            </h3>
                            
                            <p className="text-slate-500 leading-loose font-medium text-[15px] ">
                                {item.desc}
                            </p>
                            
                            {/* Minimalist Benefit Badge */}
                            <div className="mt-auto px-5 py-2 bg-slate-50 rounded-full">
                                <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.3em]">
                                    Benefit {item.benefitId}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyVolunteer;