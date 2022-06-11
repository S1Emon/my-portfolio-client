import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    return (
        <div className='p-3 mt-3 bg-neutral text-slate-200'>
            <h1 className='text-4xl font-bold text-center text-white'>MY EXPERIENCE</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row shadow-sm shadow-white">
                    <img src="https://i.ibb.co/dtWtgDT/6931926.jpg" className="max-w-sm rounded-lg shadow-xl shadow-gray-900" alt='pic' />
                    <div>
                        <h2 className="text-3xl font-bold">I don't have Experience yet with any organization.</h2>
                        <p className='py-6 font-semibold'>I'm working as a freelancer & on Fiverr. So, I am gaining many experiences. I have done many projects. Please checkout my projects section. <span className='btn btn-sm btn-outline text-white'><Link to="/projects">Click here</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;