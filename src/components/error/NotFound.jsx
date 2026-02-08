import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
            {/* Animated Logo/Image Section */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-indigo-200/30 blur-[100px] rounded-full"></div>
                <img 
                    src={logo} 
                    alt="ActiveHand Logo" 
                    className="w-24 h-24 md:w-32 md:h-32 object-contain relative animate-bounce" 
                />
            </div>

            {/* Error Code */}
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f97316] leading-none mb-4">
                404
            </h1>

            {/* Error Message */}
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-6">
                Oops! Page Not Found
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                It seems the hand you're looking for isn't active right now. The page might have been moved or deleted.
            </p>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Link 
                    to="/" 
                    className="px-10 py-4 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f97316] text-white font-bold rounded-2xl shadow-xl hover:scale-105 transition-all active:scale-95"
                >
                    Back to Home
                </Link>
                <Link 
                    to="/need-volunteer" 
                    className="px-10 py-4 bg-white border-2 border-slate-100 text-slate-700 font-bold rounded-2xl hover:bg-slate-50 transition-all"
                >
                    Find Projects
                </Link>
            </div>

            {/* Bottom Graphic (Matches Banner Style) */}
            <div className="mt-16 opacity-20 hidden md:block">
                <div className="w-96 h-1 bg-gradient-to-r from-transparent via-indigo-600 to-transparent rounded-full"></div>
            </div>
        </div>
    );
};

export default NotFound;