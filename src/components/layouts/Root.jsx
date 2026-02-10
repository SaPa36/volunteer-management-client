
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';

const Root = () => {

    

    return (
        <div className='bg-base-100 text-base-content min-h-screen transition-colors duration-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;