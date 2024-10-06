import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFile, faFolder, faGear, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);
    const [isDoctor, setIsDoctor] = useState();


    useEffect(() => {
        fetch('http://localhost:5000/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsDoctor(data)
    })
    }, [])

    return (
        <div className='sidebar-container bg-color'>
            <ul>
                <li>
                    <Link className='mx-2 link' to={'/dahsboard'}><FontAwesomeIcon className='icon' icon={faBars} /> Dashboard</Link>
                </li>
                {isDoctor && <div>
                    <li>
                        <Link className='mx-2 link' to={'/appointment'}><FontAwesomeIcon className='icon' icon={faFolder} /> Appointment</Link>
                    </li>
                    <li>
                        <Link className='mx-2 link' to={'/patients'}><FontAwesomeIcon className='icon' icon={faUsers} /> Patients</Link>
                    </li>
                    <li>
                        <Link className='mx-2 link' to={'/prescriptions'}><FontAwesomeIcon className='icon' icon={faFile} /> Prescriptions</Link>
                    </li>
                    <li>
                        <Link className='mx-2 link' to={'/addDoctor'}><FontAwesomeIcon className='icon' icon={faUserPlus} /> Add Doctor</Link>
                    </li>
                    <li>
                        <Link className='mx-2 link' to={'/setting'}><FontAwesomeIcon className='icon' icon={faGear} /> Setting</Link>
                    </li>
                </div>}
            </ul>
        </div>
    );
};

export default Sidebar;