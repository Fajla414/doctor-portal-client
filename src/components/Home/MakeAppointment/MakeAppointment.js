import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css';

const MakeAppointment = () => {
    return (
        <section className='make-appointment my-5 '>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-7 text-light py-5">
                        <h5 className="text-uppercase" style={{color: '#0FCFEC'}}>Appointment</h5>
                        <h1 className='my-4'>Make an Appointment <br /> Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae explicabo autem ducimus, a illo consectetur dolorem voluptas repellat quod saepe maiores? In, recusandae? Saepe cupiditate facilis nobis quia. Eius, odit.</p>
                        <button className='btn bg-color fw-bold text-light'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;