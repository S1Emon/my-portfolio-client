import React from 'react';
import Project from './Project';
import useProjects from '../../hooks/useProjects'

const Projects = () => {
    const [projects] = useProjects()

    return (
        <section className='container mx-auto my-20'>
            <div className='mb-20'>
                <h1 className='text-4xl font-bold text-white text-center'>MY RECENT PROJECTS</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects?.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </section>
    );
};

export default Projects;