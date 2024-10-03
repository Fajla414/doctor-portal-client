import React from 'react';
import fetured from '../../../images/fetured.png';
import './FeturedService.css';

const FeturedService = () => {
    return (
        <section className='features-service pb-0  pb-md-0 my-5'>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-4 mb-4 m-md-0">
                        <img src={fetured} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-7 offset-md-1 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-3">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima debitis et non eius culpa! Voluptates explicabo voluptatum voluptatibus libero consequuntur tempore dicta magnam! Blanditiis fugit voluptatum impedit, rerum atque dolorum pariatur corrupti, sit placeat adipisci eaque illo asperiores a ad!
                        </p>
                        <button className='btn bg-color fw-bold text-light'>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeturedService;