import React from 'react';
import Header from '../Header/Header';
import Services from '../Servis/Services';
import FeturedService from '../FeturedService/FeturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Tesmonials from '../Testmonials/Tesmonials';
import Blogs from '../Blogs/Blogs';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeturedService />
            <MakeAppointment />
            <Tesmonials />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;