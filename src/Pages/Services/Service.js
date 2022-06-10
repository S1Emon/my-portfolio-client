import React from 'react';
import { BsWordpress } from 'react-icons/bs';
import { FaReact, FaNode } from 'react-icons/fa';

const Service = () => {
    return (
        <>

            <div class="card lg:max-w-lg bg-base-300 shadow-3xl my-8">
                <figure class="px-2 pt-2">
                    <span className='text-9xl'><BsWordpress></BsWordpress></span>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">WordPress</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Read Details</button>
                    </div>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-300 shadow-3xl my-8">
                <figure class="px-2 pt-2">
                    <span className='text-9xl'><FaReact></FaReact></span>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">ReactJS Based Design</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Read Details</button>
                    </div>
                </div>
            </div>
            <div class="card lg:max-w-lg bg-base-300 shadow-3xl my-8">
                <figure class="px-2 pt-2">
                    <span className='text-9xl'><FaNode></FaNode></span>
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">NodeJS Based Backend</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Read Details</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Service;