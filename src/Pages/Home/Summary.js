import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { AiOutlineProject } from 'react-icons/ai';
import { MdTravelExplore } from 'react-icons/md'

const Summary = () => {
    return (
        <section className='bg-neutral my-40'>
            <h1 className='text-white text-4xl font-bold text-center my-16'>SUMMARY</h1>
            <div className='lg:flex justify-around'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"

                    className="card w-44 bg-neutral-focus shadow-black shadow-sm">
                    <div className="card-body items-center text-center">
                        <span className='text-6xl font-bold text-white'><IoIosPeople></IoIosPeople></span>
                        <h2 className="text-5xl font-bold text-white">30+</h2>
                        <p className='text-white font-semibold'>Happy Clients</p>
                    </div>
                </div>

                <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card bg-neutral-focus w-44 shadow-black shadow-sm">
                    <div className="card-body items-center text-center">
                        <span className='text-6xl font-bold text-white'><AiOutlineProject></AiOutlineProject></span>
                        <h2 className="text-5xl font-bold text-white">50+</h2>
                        <p className='text-white font-semibold'>Project Complete</p>
                    </div>
                </div>

                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card bg-neutral-focus w-44 shadow-black shadow-sm">
                    <div className="card-body items-center text-center">
                        <span className='text-6xl font-bold text-white'><MdTravelExplore></MdTravelExplore></span>
                        <h2 className="text-5xl font-bold text-white">1 Year</h2>
                        <p className='text-white font-semibold'>Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;