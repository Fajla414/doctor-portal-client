import React from 'react';
import './HeaderMain.css';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <div className="container">
            <main className='row d-flex align-items-center' style={{height: '600px'}}>
                <div className="col-md-4 offset-md-1">
                    <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo unde fugiat voluptate dolore maiores.</p>
                    <button className='btn bg-color fw-bold text-light'>Get Appoinment</button>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className='img-fluid' />
                </div>

            </main>
        </div>
    );
};

export default HeaderMain;