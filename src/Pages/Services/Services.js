import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                <div className='mb-14'>
                    <h1 className='text-4xl font-bold text-white text-center'>SERVICE I PROVIDE</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <Service></Service>
                </div>
            </div>
        </section>
    );
};

export default Services;