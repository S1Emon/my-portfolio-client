import React from 'react';
import Banner from './Banner';
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Skills from './Skills';
import Summary from './Summary';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Services></Services>
            <Summary></Summary>
        </>
    );
};

export default Home;