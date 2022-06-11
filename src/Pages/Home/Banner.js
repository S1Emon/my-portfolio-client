import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import resume from '../../assets/resume.pdf';
import { FiDownload } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/QPQXq9y/particle-lines-futuristic-network-background.jpg)" }}>
            <div className="hero-overlay bg-opacity-1"></div>
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

                        href={resume} download className="btn btn-wide btn-outline">Get Resume<FiDownload className='ml-2 text-xl'></FiDownload></a>
                </div>
            </div>
        </div>

    );
};

export default Banner;