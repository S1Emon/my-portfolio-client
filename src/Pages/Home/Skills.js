import React from 'react';
import { AiFillHtml5, AiOutlineApi } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io';
import { SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';

const Skills = () => {
    return (
        <section className='bg-neutral'>
            <h1 className='text-4xl text-white font-bold py-4 text-center'>My Skills</h1>

            <div className='flex justify-evenly p-4'>
                <span className='text-7xl font-bold text-orange-500'><AiFillHtml5></AiFillHtml5></span>
                <span className='text-7xl font-bold text-blue-500'><IoLogoCss3></IoLogoCss3></span>
                <span className='text-7xl font-bold text-yellow-500'><IoLogoJavascript></IoLogoJavascript></span>
                <span className='text-7xl font-bold text-blue-400'><FaReact></FaReact></span>
                <span className='text-7xl font-bold text-green-300'><FaNode></FaNode></span>
                <span className='text-7xl font-bold text-green-500'><SiMongodb></SiMongodb></span>
                <span className='text-7xl font-bold text-yellow-400'><SiFirebase></SiFirebase></span>
                <span className='text-7xl font-bold text-indigo-500'><FaBootstrap></FaBootstrap></span>
                <span className='text-7xl font-bold text-blue-600'><SiTailwindcss></SiTailwindcss></span>
                <span className='text-7xl font-bold text-blue-300'><AiOutlineApi></AiOutlineApi></span>
            </div>
        </section>
    );
};

export default Skills;