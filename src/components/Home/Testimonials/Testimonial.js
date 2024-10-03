import React from 'react';

const Testimonial = ({ testimonal }) => {
    return (
        <div className='col-md-4'>
            <div className='px-4' >
                <p className='text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis repudiandae laborum perferendis adipisci! Maiores eum labore sint quae exercitationem id!</p>
                <div className="row mt-5">
                    <div className="col-md-3">
                        <img src={testimonal.img} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8">
                        <h6 style={{ color: '#0FCFEC' }}>{testimonal.name}</h6>
                        <p>{testimonal.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;