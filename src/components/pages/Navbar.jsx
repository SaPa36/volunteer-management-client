import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import logo from '../../assets/logo.png';

const Navbar = () => {
    // Accessing auth state from your provider
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch(error => console.error(error));
    };

    const linkStyles = ({ isActive }) => 
        isActive 
            ? "text-indigo-600 font-bold border-b-2 border-indigo-600 rounded-none bg-transparent px-2 py-1" 
            : "text-slate-700 hover:text-indigo-500 transition-colors bg-transparent px-2 py-1";

    const navLinks = (
        <>
            <li><NavLink to="/" className={linkStyles}>Home</NavLink></li>
            <li><NavLink to="/need-volunteer" className={linkStyles}>Need Volunteer</NavLink></li>
            {/* <li><NavLink to="/be-a-volunteer" className={linkStyles}>Be a Volunteer</NavLink></li> */}
        </>
    );

    return (
        <div className="navbar bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-200 px-4 lg:px-12 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-slate-800">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-4 shadow-xl bg-white rounded-box w-64 gap-2">
                        {navLinks}
                    </ul>
                </div>
                
                <Link to="/" className="flex items-center gap-2 group">
                    <img src={logo} alt="Logo" className="w-9 h-9 object-contain group-hover:rotate-6 transition-transform" />
                    <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 bg-clip-text text-transparent hidden sm:block">
                        ActiveHand
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 font-semibold">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {user ? (
                    <div className="flex items-center gap-3">
                        {/* Profile Dropdown */}
                        <div className="dropdown dropdown-end">
                            <div 
                                tabIndex={0} 
                                role="button" 
                                className="btn btn-ghost btn-circle avatar border-2 border-indigo-100 hover:border-indigo-400 transition-all overflow-hidden"
                                title={user?.displayName} // Hover shows displayName
                            >
                                <div className="w-10 rounded-full">
                                    <img 
                                        src={user?.photoURL || "https://i.ibb.co.com/JWPWXQQS/photo-2026-01-25-10-41-21.png"} 
                                        alt="Profile" 
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-4 shadow-2xl bg-white rounded-2xl w-56 gap-2 border border-slate-100">
                                <li className="font-bold text-slate-500 px-2 py-1 text-xs uppercase tracking-widest">My Profile</li>
                                <li><Link to="/add-volunteer" className="hover:text-indigo-600 py-2">Add Volunteer Post</Link></li>
                                <li><Link to="/my-posts" className="hover:text-indigo-600 py-2">Manage My Post</Link></li>
                                <li><Link to="/my-volunteer-requests" className="hover:text-indigo-600 py-2">My Volunteer Requests</Link></li>
                                <hr className="my-1 border-slate-100" />
                                <li>
                                    <button 
                                        onClick={handleLogOut}
                                        className="btn btn-sm bg-orange-50 text-orange-600 hover:bg-orange-100 border-none rounded-lg"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Link to="/login" className="px-5 py-2 rounded-lg font-bold text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all">
                            Login
                        </Link>
                        <Link to="/register" className="px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 hover:shadow-lg transition-all">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;