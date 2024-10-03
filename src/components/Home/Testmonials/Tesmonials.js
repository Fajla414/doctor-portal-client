import React from 'react';
import wilson from '../../../images/wilson.png';
import aliza from '../../../images/aliza.png';
import gomez from '../../../images/gomez.png';
import Testimonial from '../Testimonials/Testimonial';

const testimonialData = [
    {
        id: 0,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi sed cumque deleniti quas praesentium.',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        id: 1,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi sed cumque deleniti quas praesentium.',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    },
    {
        id: 2,
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci sequi sed cumque deleniti quas praesentium.',
        name: 'Eam Gomez',
        from: 'California',
        img: gomez
    },
]

const Tesmonials = () => {
    return (
        <section className='testimonials my-5 py-5'>
            <div className="container">
                <div className="section-header">
                    <h5 style={{ color: "#0FCFEC" }}>Tesmonials</h5>
                    <h1>What Our Patients Says</h1>
                </div>
                <div className="card-deck mt-5">
                    <div className="row">
                        {
                            testimonialData.map(testimonal => <Testimonial testimonal={testimonal} key={testimonal.id} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tesmonials;