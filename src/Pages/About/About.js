import React from 'react';
import resume from '../../assets/resume.pdf';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { BsStackOverflow } from "react-icons/bs";
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const About = () => {
    return (
        <div className=' bg-inherit mx-auto'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/6XxD1q6/IMG-9877.jpg" className="max-w-sm rounded-lg shadow-xl shadow-black" alt='profile' />
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold">I'm Emon Hossain</h1>
                        <p className="py-6 text-xl font-semibold">I'm Full Stack Developer. UI/UX designer specializing in React JS.</p>
                        <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!. As an developer, my first love will always be crafting the visual. I was able to leverage my creative skills with an incredible web development toolkit, and now I spend most days branding, designing and building out web interfaces as a full-stack developer.</p>
                        <a href={resume} download className="btn btn-wide btn-outline my-4 text-center text-white">Get Resume</a>
                        <div className='flex justify-around w-64'>
                            <a href="https://github.com/S1Emon" target="_blank" rel="noopener noreferrer"><AiFillGithub className='text-3xl hover:text-black'></AiFillGithub></a>
                            <a href="https://www.linkedin.com/in/md-emon-hossain-08b187214/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='text-3xl hover:text-blue-900'></AiFillLinkedin></a>
                            <a href="https://stackoverflow.com/users/19189538/shahariar-emon" target="_blank" rel="noopener noreferrer"><BsStackOverflow className='text-3xl hover:text-orange-700'></BsStackOverflow></a>
                            <a href="https://twitter.com/Emon08776950" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className='text-3xl hover:text-blue-600'></AiFillTwitterSquare></a>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <div className="drawer">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">

                        <div className="w-full justify-center navbar bg-neutral-focus shadow-sm shadow-black">

                            <ul className="menu  menu-horizontal text-white">

                                <li className='text-3xl font-semibold'><CustomLink to="/about">Education</CustomLink></li>
                                <li className='text-3xl font-semibold'><CustomLink to="/about/experience">Experience</CustomLink></li>
                            </ul>

                        </div>
                        <div>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;