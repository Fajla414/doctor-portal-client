import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        id: 0,
        img: fluoride,
        name: 'Fluoride Treatment'
    },
    {
        id: 1,
        img: cavity,
        name: 'Cavity Filling'
    },
    {
        id: 2,
        img: whitening,
        name: 'Teath Whitening'
    }
]

const Services = () => {
    return (
        <section>
            <div className='text-center my-5'>
                <h5 style={{ color: '#0FCFEC' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3A4256' }}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="w-75 row pt-5">
                    {
                        serviceData.map(service => <ServiceDetail key={service.id} service={service} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;