import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className='col-md-4 text-center'>
            <img src={service.img} className='img-fluid' style={{width: '70px'}} alt="" />
            <h5 className='mb-3 mt-4'>{service.name}</h5>
            <p className='text-body-tertiary'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem porro in cumque nesciunt, vitae quam dicta eveniet facere. Minima, architecto.</p>
        </div>
    );
};

export default ServiceDetail;