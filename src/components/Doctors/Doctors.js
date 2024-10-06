import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';


const Doctors = () => {
    const [doctor, setDoctor] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/getDoctor`)
            .then(res => res.json())
            .then(data => {
                setDoctor(data);
            })
    }, [])

    return (
        <div className='container'>
            <div className="row">
                {doctor.map((doctor, index) => <Doctor key={index} doctor={doctor} />)}
            </div>
        </div>
    );
};

export default Doctors;