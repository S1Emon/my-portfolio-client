import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
const ProjectDetails = () => {
    const { projectId } = useParams()
    const [project, setProject] = useState({})
    console.log(project);

    useEffect(() => {
        fetch(`https://still-savannah-07996.herokuapp.com/project/${projectId}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [projectId])

    return (
        <div>
            <div className='container my-10 mx-auto'>

                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <div class="carousel w-full">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={project?.img1} class="w-full" alt='website slide-1' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={project?.img2} class="w-full" alt='website slide-2' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src={project?.img3} class="w-full" alt='website side-3' />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                    </figure>


                    <div class="card-body">
                        <h2 class="card-title">{project?.name}</h2>
                        <p><span className='font-semibold'>Features: </span>{project?.features}</p>
                        <p><span className='font-semibold'>Technology: </span>{project?.technology}</p>
                        <p>{ }</p>
                        <div class="card-actions justify-center">
                            <a href={project?.link} target="_blank" className="btn btn-wide btn-outline">Visit Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;