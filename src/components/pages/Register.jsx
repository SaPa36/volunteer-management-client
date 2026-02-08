import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';

const Register = () => {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white px-4 py-6">
            <div className="relative group w-full max-w-md">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                {/* Main Card */}
                <div className="relative bg-white border border-slate-100 rounded-3xl px-8 py-6 shadow-xl">
                    
                    {/* Header */}
                    <div className="text-center mb-4">
                        <img src={logo} alt="Logo" className="w-12 h-12 mx-auto object-contain mb-2" />
                        <h2 className="text-2xl font-black tracking-tight text-slate-800">
                            Join the Community
                        </h2>
                    </div>

                    <form className="space-y-3">
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Full Name</span>
                            </label>
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Photo URL Field */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Photo URL</span>
                            </label>
                            <input 
                                type="url" 
                                placeholder="https://image-link.com" 
                                className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Password</span>
                            </label>
                            <input 
                                type="password" 
                                placeholder="••••••••" 
                                className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm" 
                                required 
                            />
                        </div>

                        {/* Register Button */}
                        <button className="btn w-full h-11 mt-4 border-none text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:brightness-110 shadow-lg shadow-indigo-100 font-bold text-base rounded-xl transition-all active:scale-95">
                            Create Account
                        </button>

                        <div className="divider text-slate-400 text-[10px] font-bold tracking-widest uppercase py-1">OR</div>

                        {/* Google Button */}
                        <button type="button" className="btn btn-outline w-full h-11 border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-700 font-bold flex items-center justify-center gap-3">
                            <img src={google} alt="Google" className="w-5 h-5" />
                            Sign up with Google
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-5 text-center text-sm">
                        <span className="text-slate-500">Already a member?</span>
                        <Link to="/login" className="ml-1.5 font-black text-indigo-600 hover:text-orange-500 transition-colors underline decoration-2 underline-offset-4">
                            Log In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;