import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';
const Services = () => {
    const ServicesData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img: cavity
           
        },
        {
            id:1,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' ,
            img: whitening
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <h3 className='text-primary uppercase font-sm font-bold'>Our Services</h3>
                <h2 className='text-3xl'>Services we provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    ServicesData.map(service=><ServiceCard
                    key={service.id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;