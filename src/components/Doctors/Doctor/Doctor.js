import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = ({ doctor }) => {
    return (
        <div className='col-md-4 text-center'>
            <div className="img">
                <img style={{ height: '200px' }} src={`data:image/png;base64,${doctor.image.img}`} className='img-fluid' alt="" />
            </div>
            <div className="description mt-3">
                <h2>{doctor.name}</h2>
                <p><FontAwesomeIcon className='text-primary' icon={faPhone} /> {doctor.phone}</p>
            </div>
        </div>
    );
};

export default Doctor;