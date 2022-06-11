import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import resume from '../../assets/resume.pdf';
import { FiDownload } from 'react-icons/fi';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/QPQXq9y/particle-lines-futuristic-network-background.jpg)" }}>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="mb-5 text-4xl font-bold text-black">Hello! I'm Emon Hossain</h1>
                        <h1 data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="900"
                            className="mb-5 text-5xl font-bold text-black">I'm a {' '}

                            <ReactTypingEffect className='text-orange-700'
                                text={["Full-Stack Developer", "React Developer"]}
                            />

                        </h1>
                        <p data-aos="fade-right"
                            data-aos-delay="600"
                            data-aos-duration="800"
                            className="mb-5">UI/UX Designer specializing in React JS.  I'm able to create any type of website using React JS. Interest to know about me?</p>
                        <a data-aos="zoom-in"
                            data-aos-delay="1300"

                            href={resume} download className="btn btn-wide btn-outline">Get Resume<FiDownload className='ml-2 text-xl'></FiDownload>
                        </a>
                        <div className='flex justify-between my-6'>
                            <a href="https://github.com/S1Emon" target="_blank" rel="noopener noreferrer"><AiFillGithub className='text-3xl text-black hover:shadow-red-700 shadow-black shadow-lg rounded-xl '></AiFillGithub></a>

                            <a href="https://www.linkedin.com/in/md-emon-hossain-08b187214/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className='text-3xl hover:shadow-red-700 shadow-blue-900 text-blue-600 shadow-lg'></AiFillLinkedin></a>

                            <a href="https://stackoverflow.com/users/19189538/shahariar-emon" target="_blank" rel="noopener noreferrer"><BsStackOverflow className='text-3xl hover:shadow-red-700 shadow-orange-600 shadow-lg  text-orange-700'></BsStackOverflow></a>

                            <a href="https://twitter.com/Emon08776950" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare className='text-3xl text-blue-600 shadow-lg shadow-blue-700 hover:shadow-red-700'></AiFillTwitterSquare></a>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Banner;