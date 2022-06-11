import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaReact, FaNode } from 'react-icons/fa';

const Service = () => {
    return (
        <>

            <div data-aos="flip-up"
                data-aos-delay="200"
                data-aos-duration="1000"

                className="card lg:max-w-lg bg-neutral-focus shadow-white shadow-lg my-8">
                <figure className="px-2 pt-2">
                    <span className='text-9xl text-white'><CgWebsite></CgWebsite></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Plain Websites</h2>
                    <p className='text-white'>I make this kind of Websites using HTML,CSS, & JavaScript.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline text-white">Read Details</button>
                    </div>
                </div>
            </div>
            <div data-aos="flip-down"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="card lg:max-w-lg bg-neutral-focus shadow-white shadow-lg my-8">
                <figure className="px-2 pt-2">
                    <span className='text-9xl text-white'><FaReact></FaReact></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">UI/UX Design</h2>
                    <p className='text-white'>I make this kind of websites using ReactJS & CSS Framework.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline text-white">Read Details</button>
                    </div>
                </div>
            </div>
            <div data-aos="flip-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="card lg:max-w-lg bg-neutral-focus shadow-white shadow-lg my-8">
                <figure className="px-2 pt-2">
                    <span className='text-9xl text-white'><FaNode></FaNode></span>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-white">Full Stack Websites</h2>
                    <p className='text-white'>For making this using ReactJS, NodeJS, MongoDB, & so many.</p>
                    <div className="card-actions">
                        <button className="btn btn-outline text-white">Read Details</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Service;