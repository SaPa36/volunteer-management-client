import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // 1. Handle the loading state so the user isn't redirected 
    // while Firebase is still checking their session.
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-accent"></span>
            </div>
        );
    }

    // 2. If user exists, allow them to see the content (children)
    if (user) {
        return children;
    }

    // 3. If no user, send them to login page
    // We pass 'state={location.pathname}' to remember where they wanted to go
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;