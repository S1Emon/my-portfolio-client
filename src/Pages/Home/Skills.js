import React from 'react';
import { AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';

const Skills = () => {
    return (
        <section className='bg-neutral my-40'>
            <h1 className='text-4xl text-white font-bold py-4 text-center'>MY SKILLS</h1>

            <div className='lg:flex justify-evenly p-4'>

                <div data-aos="flip-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl justify-end font-bold text-orange-500'><AiFillHtml5></AiFillHtml5></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">HTML5</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-blue-500'><IoLogoCss3></IoLogoCss3></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">CSS3</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-indigo-500'><FaBootstrap></FaBootstrap></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">BS</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-blue-600'><SiTailwindcss></SiTailwindcss></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">TW</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="250"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-yellow-500'><IoLogoJavascript></IoLogoJavascript></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">JavaScript</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-blue-400'><FaReact></FaReact></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">React</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="350"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-green-500'><SiMongodb></SiMongodb></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">MongoDB</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-green-300'><FaNode></FaNode></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">NodeJS</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="450"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-yellow-400'><SiFirebase></SiFirebase></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">Firebase</h2>
                    </div>
                </div>
                <div data-aos="flip-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                    className="card bg-neutral-focus lg:w-28 shadow-sm shadow-black">
                    <figure className="px-4 pt-4">
                        <div className='text-7xl font-bold text-blue-300'><AiOutlineApi></AiOutlineApi></div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white">API</h2>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;