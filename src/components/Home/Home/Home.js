import React from 'react';
import Header from '../Header/Header';
import Services from '../Servis/Services';
import FeturedService from '../FeturedService/FeturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Tesmonials from '../Testmonials/Tesmonials';
import Blogs from '../Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Doctors from '../../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeturedService />
            <MakeAppointment />
            <Tesmonials />
            <Blogs />
            <Doctors />
            <Footer />
        </div>
    );
};

export default Home;