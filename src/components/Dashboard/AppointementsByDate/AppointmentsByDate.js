import React from 'react';

const AppointmentsByDate = ({ appointments }) => {
    return (
        <div >
            <h3 className='text-color'>Appointments Detail</h3>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment => <tr key={appointment._id}><td>{appointment.name}</td><td>{appointment.phone}</td><td>{appointment.email}</td></tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsByDate;