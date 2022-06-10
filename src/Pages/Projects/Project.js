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
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-2 pt-2">
                    <img src={img1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-semibold">Features:</span> {' '} {features}</p>
                    <p> <span className="font-semibold">Technology:</span> {' '} {technology}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => navigateToProjectDetails(_id)} className="btn btn-wide btn-outline">View Details</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;