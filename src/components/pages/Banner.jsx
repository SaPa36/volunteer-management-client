import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import volunteer1 from '../../assets/volunteer1.jpg';
import volunteer2 from '../../assets/volunteer2.jpg';
import volunteer3 from '../../assets/volunteer3.jpeg';

const Banner = () => {
    return (
        <div className="w-full h-[500px] relative overflow-hidden ">
            
            {/* Background Decorative Gradient Blur */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-200/30 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/30 blur-[120px] rounded-full"></div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect={'fade'}
                fadeEffect={{ crossFade: true }} // Essential fix for the overwriting issue
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {/* Slide 1 */}
                <SwiperSlide className=""> {/* bg-white prevents ghosting from previous slides */}
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16 gap-8">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100">
                                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">New Opportunities</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-800 leading-[1.1]">
                                Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500">Change</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl max-w-md leading-relaxed">
                                Join our community of change-makers. Your time and talent can transform lives today.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 hover:scale-105 transition-all">
                                    Start Volunteering
                                </button>
                                <button className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 relative h-[250px] md:h-[450px]">
                            <img 
                                src={volunteer1} 
                                className="relative w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white" 
                                alt="Volunteer" 
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16 gap-8">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Community Impact</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-800 leading-[1.1]">
                                Empower <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-indigo-600">Others</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl max-w-md leading-relaxed">
                                Whether it's teaching or feeding the hungry, every action creates a ripple effect of hope.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 via-purple-600 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-orange-100 hover:scale-105 transition-all">
                                    Join a Mission
                                </button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 h-[250px] md:h-[450px]">
                            <img 
                                src={volunteer2} 
                                className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white rotate-2" 
                                alt="Helping" 
                            />
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center px-6 md:px-16 gap-8">
                        <div className="order-2 md:order-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100">
                                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                                <span className="text-xs font-bold text-purple-600 uppercase tracking-widest">Global Reach</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black text-slate-800 leading-[1.1]">
                                Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500">Leaders</span>
                            </h2>
                            <p className="text-slate-600 text-lg md:text-xl max-w-md leading-relaxed">
                                Connect with global organizations and build skills that define your professional future.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-orange-500 text-white font-bold rounded-2xl shadow-xl shadow-purple-100 hover:scale-105 transition-all">
                                    Explore More
                                </button>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 h-[250px] md:h-[450px]">
                            <img 
                                src={volunteer3} 
                                className="w-full h-full object-cover rounded-[2rem] shadow-2xl border-4 border-white -rotate-2" 
                                alt="Future" 
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;