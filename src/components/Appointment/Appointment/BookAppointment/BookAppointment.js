import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 0,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
    {
        id: 1,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
    {
        id: 2,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
    {
        id: 3,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
    {
        id: 4,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
    {
        id: 5,
        subject: 'Teeth Orthodontice',
        visitingHour: '8:00 AM - 9:00 Am',
        totalSpace: 10,
    },
]


const BookAppointment = ({ date }) => {
    return (
        <section className='my-5' >
            <h2 className='text-center text-color'>Available Appoiment, {date.toDateString()}</h2>
            <div className="container">
                <div className="row">
                    {
                        bookingData.map(booking => <BookingCard date={date} key={booking.id} booking={booking} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default BookAppointment;