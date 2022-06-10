import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <section className='container my-16 mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-black text-center'>What Service I Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <Service></Service>
            </div>
        </section>
    );
};

export default Services;