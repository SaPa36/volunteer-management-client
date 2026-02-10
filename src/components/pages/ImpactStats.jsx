const ImpactStats = () => {
    const stats = [
        { label: "Successful Missions", value: "1,200+", color: "text-indigo-600" },
        { label: "Active Volunteers", value: "4,500+", color: "text-purple-600" },
        { label: "Cities Reached", value: "85", color: "text-orange-500" },
        { label: "Lives Touched", value: "50k+", color: "text-emerald-500" }
    ];

    return (
        <section className=" ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-2xl  border border-slate-100 text-center hover:scale-105 transition-transform">
                            <h4 className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</h4>
                            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;