import { useContext, useState } from 'react'; // Added useState
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Install react-icons if you haven't
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                toast.success("Login Successfully");
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(location.state?.from?.pathname || "/");
            })
            .catch(error => {
                toast.error("Login Failed");
                console.error(error);
            });
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-white px-4 py-4">
            <div className="relative group w-full max-w-md">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative bg-white border border-slate-100 rounded-3xl px-8 py-6 shadow-xl">
                    <div className="text-center mb-4">
                        <img src={logo} alt="Logo" className="w-14 h-14 mx-auto object-contain mb-2" />
                        <h2 className="text-2xl font-black tracking-tight text-slate-800">Welcome Back</h2>
                    </div>

                    <form className="space-y-3" onSubmit={handleLogin}>
                        {/* Email Input */}
                        <div className="form-control">
                            <label className="label py-1">
                                <span className="label-text font-bold text-slate-700">Email Address</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="Enter your email" 
                                className="input input-bordered rounded-lg h-11 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none" 
                                required 
                            />
                        </div>

                        {/* Password Input with Toggle */}
                        <div className="form-control">
                            <div className="flex justify-between items-center px-1">
                                <label className="label py-1">
                                    <span className="label-text font-bold text-slate-700">Password</span>
                                </label>
                                <Link to="/forgot" className="text-xs font-bold text-indigo-600 hover:text-purple-600">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    name="password"
                                    placeholder="••••••••" 
                                    className="input input-bordered rounded-lg h-11 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none pr-10" 
                                    required 
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                </button>
                            </div>
                        </div>

                        <button className="btn w-full h-11 mt-4 border-none text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:brightness-110 shadow-lg shadow-indigo-100 font-bold text-base rounded-xl transition-all active:scale-95">
                            Sign In
                        </button>

                        <div className="divider text-slate-400 text-[10px] font-bold tracking-widest uppercase py-2">OR</div>

                        <button type="button" className="btn btn-outline w-full h-11 border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-700 font-bold flex items-center justify-center gap-3">
                            <img src={google} alt="Google" className="w-5 h-5" />
                            Continue with Google
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-slate-500">Don't have an account?</span>
                        <Link to="/register" className="ml-1.5 font-black text-indigo-600 hover:text-orange-500 transition-colors underline decoration-2 underline-offset-4">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;