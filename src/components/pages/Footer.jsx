import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-slate-400 pt-16 pb-8 px-6 md:px-16 mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                
                {/* Brand Section */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="ActiveHand Logo" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#f97316] bg-clip-text text-transparent">
                            ActiveHand
                        </span>
                    </Link>
                    <p className="text-sm leading-relaxed text-slate-400">
                        Empowering communities through the spirit of volunteerism. Join us in making a real difference, one hand at a time.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition-all"><FaFacebook /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition-all"><FaTwitter /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition-all"><FaInstagram /></a>
                        <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-slate-900 hover:scale-110 transition-all"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Quick Links - Fixed Light Text for Headings */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                    <ul className="space-y-4 text-sm">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/need-volunteer" className="hover:text-white transition-colors">Need Volunteer</Link></li>
                        <li><Link to="/be-volunteer" className="hover:text-white transition-colors">Be a Volunteer</Link></li>
                        <li><Link to="/login" className="hover:text-white transition-colors">Login</Link></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Contact Us</h4>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-[#6366f1]" /> 
                            <span>support@activehand.org</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhoneAlt className="text-[#6366f1]" /> 
                            <span>+880 1234 567 890</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-[#6366f1]" /> 
                            <span>Dhaka, Bangladesh</span>
                        </li>
                    </ul>
                </div>

                {/* Newsletter - Fixed Button Color */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">Stay Updated</h4>
                    <p className="text-sm mb-4">Subscribe to our newsletter for the latest opportunities.</p>
                    <div className="relative flex items-center">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full px-4 py-3 rounded-xl bg-white text-slate-900 focus:outline-none"
                        />
                        <button className="absolute right-1 px-5 py-2 bg-gradient-to-r from-indigo-600 via-purple-500 to-orange-500 text-white rounded-lg font-bold hover:opacity-90 transition-all">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-800 text-center">
                <p className="text-sm italic text-slate-500">
                    &copy; 2026 <span className="font-bold text-slate-400">ActiveHand</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;