import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { _id, name, img1, features, technology, link } = project;
    const navigate = useNavigate()

    const navigateToProjectDetails = id => {
        navigate(`/projects/${id}`)
    }

    return (
        <>
            <div data-aos="flip-right"
                data-aos-delay="100"
                data-aos-duration="1200"
                className="card lg:max-w-lg bg-base-100 shadow-black shadow-sm">
                <figure className="px-2 pt-2 pb-2">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body bg-neutral-focus items-center text-center">
                    <h2 className="card-title text-white">{name}</h2>
                    <p className='text-white'><span className="font-semibold text-white">Features:</span> {' '} {features}</p>
                    <p className='text-white'> <span className="font-semibold text-white">Technology:</span> {' '} {technology}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => navigateToProjectDetails(_id)} className="btn btn-wide btn-outline text-white">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;