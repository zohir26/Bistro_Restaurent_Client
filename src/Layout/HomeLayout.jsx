import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';
import Category from '../Home/Category';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Category></Category>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;