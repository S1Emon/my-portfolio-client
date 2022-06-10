import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import resume from '../../assets/resume.pdf'

const Banner = () => {
    return (
        <div class="hero min-h-screen" style={{ backgroundImage: "url(https://i.ibb.co/QPQXq9y/particle-lines-futuristic-network-background.jpg)" }}>
            <div class="hero-overlay bg-opacity-1"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-lg">
                    <h1 class="mb-5 text-4xl font-bold text-black">Hello! I'm Emon Hossain</h1>
                    <h1 class="mb-5 text-5xl font-bold text-black">I'm a {' '}

                        <ReactTypingEffect
                            text={["Full-Stack Developer", "React Developer"]}
                        />

                    </h1>
                    <p class="mb-5">UI/UX Designer specializing in React JS.  I'm able to create any type of website using React JS. Interest to know about me?</p>
                    <a href={resume} download class="btn btn-wide btn-blue">Get Resume</a>
                </div>
            </div>
        </div>

    );
};

export default Banner;