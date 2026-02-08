import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    // Shared Link Styles for consistency
    const linkStyles = ({ isActive }) => 
        isActive 
            ? "text-indigo-600 font-bold border-b-2 border-indigo-600 rounded-none bg-transparent px-2 py-1" 
            : "text-slate-700 hover:text-indigo-500 transition-colors bg-transparent px-2 py-1";

    const navLinks = (
        <>
            <li><NavLink to="/" className={linkStyles}>Home</NavLink></li>
            <li><NavLink to="/need-volunteer" className={linkStyles}>Need Volunteer</NavLink></li>
            <li><NavLink to="/add-volunteer" className={linkStyles}>Be a Volunteer</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-slate-50/90 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-slate-200 px-4 lg:px-12 py-2">
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-xl bg-white rounded-box w-64 gap-2">
                        {navLinks}
                    </ul>
                </div>
                
                {/* Logo and Brand Name */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img 
                        src={logo} 
                        alt="ActiveHand Logo" 
                        className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform" 
                    />
                    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 bg-clip-text text-transparent hidden sm:block">
                        ActiveHand
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-semibold text-base">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-4">
                {/* Improved Login Button: Stylish outline that matches the vibe */}
                <Link to="/login" className="px-5 py-2 rounded-lg font-bold text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-indigo-400 transition-all  sm:inline-flex">
                    Login
                </Link>
                
                {/* Gradient "Get Started" Button */}
                <Link to="/register" className="px-6 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 hover:shadow-lg hover:shadow-indigo-200 active:scale-95 transition-all">
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;