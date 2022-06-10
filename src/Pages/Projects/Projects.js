import React from 'react';
import Project from './Project';
import useProjects from '../../hooks/useProjects'

const Projects = () => {
    const [projects] = useProjects()

    return (
        <div className='container mx-auto my-16'>
            <div className='my-10'>
                <h1 className='text-4xl font-bold text-black text-center'>My Best Projects</h1>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    projects?.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;