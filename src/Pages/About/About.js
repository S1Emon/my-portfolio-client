import React from 'react';
import resume from '../../assets/resume.pdf';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='container bg-inherit mx-auto'>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/6XxD1q6/IMG-9877.jpg" class="max-w-sm rounded-lg shadow-2xl" alt='profile' />
                    <div>
                        <h1 class="text-5xl font-bold">I'm Emon Hossain</h1>
                        <p class="py-6 text-xl font-semibold">I'm Full Stack Developer. UI/UX designer specializing in React JS.</p>
                        <p>I'm a web developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!. As an developer, my first love will always be crafting the visual. I was able to leverage my creative skills with an incredible web development toolkit, and now I spend most days branding, designing and building out web interfaces as a full-stack developer.</p>
                        <a href={resume} download class="btn btn-wide btn-outline my-4 text-center">Get Resume</a>
                    </div>
                </div>
            </div>

            <div className='my-8'>
                <div className='flex justify-around'>
                    <div class="btn-group">
                        <Link to='/about' class="btn btn-wide">Education</Link>

                        <button class="btn btn-wide">Skills</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;