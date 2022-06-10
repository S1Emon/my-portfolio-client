import React from 'react';
import Banner from './Banner';
import Footer from '../Shared/Footer'
import Services from '../Services/Services';
import Projects from '../Projects/Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Projects></Projects>
            <Skills></Skills>
            <Services></Services>
            <Footer></Footer>
        </>
    );
};

export default Home;