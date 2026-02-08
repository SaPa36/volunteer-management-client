import { useContext, useState } from 'react'; // Added useState
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Ensure react-icons is installed
import logo from '../../assets/logo.png';
import google from '../../assets/google.png';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

    const { createUser, logOut } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false); // State for toggle
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        //passwrord validation
        //password checkinng
        if (password.length < 6) {
            toast.error("Password Can not be less then 6 charecter", {});
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password must be one UpperCase Charecter", {});
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password must be one LowerCase Charecter", {});
            return;
        }


        console.log(name, email, photoURL, password);
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    title: "Registration Successful!",
                    icon: "success",
                    draggable: true
                });

                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                const createdAt = result.user?.metadata?.creationTime;

                logOut()
                    .then(() => {
                        toast.success("Registration Successful! Please Login.");
                        navigate("/login"); // Redirect to login page
                    })

                const user = {
                    name,
                    email,
                    createdAt
                };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            })
            .catch(error => {
                console.error(error);
            });
    };

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

                    <form className="space-y-3" onSubmit={handleSignUp}>
                        {/* Name Field */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Full Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                name='name'
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
                                name='email'
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
                                type="text"
                                name='photoURL'
                                placeholder="https://image-link.com"
                                className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm"
                                required
                            />
                        </div>

                        {/* Password Field with Toggle */}
                        <div className="form-control">
                            <label className="label py-0.5">
                                <span className="label-text font-bold text-slate-700">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder="••••••••"
                                    className="input input-bordered h-10 w-full bg-slate-50 border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all outline-none text-sm pr-10"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600 transition-colors"
                                >
                                    {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button className="btn w-full h-11 mt-4 border-none text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 hover:brightness-110 shadow-lg shadow-indigo-100 font-bold text-base rounded-xl transition-all active:scale-95">
                            Create Account
                        </button>

                        <div className="divider text-slate-400 text-[10px] font-bold tracking-widest uppercase py-1">OR</div>

                        {/* Google Button */}
                        <button type="button" className="btn btn-outline w-full h-11 border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-700 font-bold flex items-center justify-center gap-3 transition-all">
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
            <ToastContainer position="top-center" reverseOrder={false} />
        </div>
    );
};

export default Register;