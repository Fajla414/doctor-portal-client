import React, { useState } from 'react';
import AppointmentForm from '../../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 my-5'  >
            <div className="card p-3" style={{border: 'none'}}>
                <div className="card-body text-center">
                    <h5 className="card-title text-brand text-color" style={{color: '#0FCFEC'}}>{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className='btn bg-color fw-bold text-light'>Book Appointment</button>
                    <AppointmentForm date={date} modalIsOpen={modalIsOpen} AppointmentOn={booking.subject} closeModal={closeModal} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;