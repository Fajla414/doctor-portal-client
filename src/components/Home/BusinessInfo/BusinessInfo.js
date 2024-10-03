import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,  faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
const infoData = [
    {
        id: 0,
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: faClock,
        bgColor: "bg-color",
    },
    {
        id: 1,
        title: 'Visit our location',
        description: 'Brollklyn, SY 10036, United States',
        icon: faLocationDot,
        bgColor: "bg-color2",
    },
    {
        id: 2,
        title: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        bgColor: "bg-color",
    },
]


const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row">
                {
                    infoData.map(info => <InfoCard key={info.id} info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;