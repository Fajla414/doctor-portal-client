import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AppointmentsByDate from '../AppointementsByDate/AppointmentsByDate';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MyContext } from '../../../App';

const containerStyle = {
    height: '100%',
    backgroundColor: '#F4FDFB',
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {

        fetch(`http://localhost:5000/appointmentsByDate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({date:  selectedDate, email: loggedInUser.email})
        })
            .then(res => res.json())
            .then(data => { setAppointments(data) })
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row mt-5">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-4">
                    <Calendar onChange={handleDateChange} value={new Date()} />

                </div>
                <div className="col-md-5">
                    <AppointmentsByDate appointments={appointments} />
                </div>
            </div>
        </section>
    );
};

export default Dashboard;