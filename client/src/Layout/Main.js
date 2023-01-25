import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from '../pages/shared/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
             <ToastContainer />
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;