import React from 'react';
import OurMission from './OurMission';
import DepartmentHeading from './dept';
import SectionSpacer from './SectionSpacer';
import Carousel3D from './Carousel3D';
import Collaborators from './Collaborator';
import { FigmaContactForm } from './contact/FigmaContactForm';
import PhoenixParticlesBackground from './background/PhoenixParticlesBackground';
import AboutUs from './AboutUs';
import Footer from './Footer';
import '../css/globals.css';
import '../css/carousel.css';
import Teamcard from './ourTeam';
import Achievements from './Achievements';
import { Journey } from './Journey';

const HomeContent = () => (
    <div className="relative w-screen min-h-screen overflow-hidden justify-center items-center">
        <PhoenixParticlesBackground />
        <div className="relative z-10 flex flex-col items-center w-full">
            <AboutUs />
            <SectionSpacer size="xs" />
            <OurMission />
            <SectionSpacer size="xs" />
            <DepartmentHeading />
            <SectionSpacer size="xs" />
            <Carousel3D />
            <div id="activities" className="w-full">
                <Collaborators />
            </div>
            <SectionSpacer size="xs" />
            <div id="contact" className="w-full">
                <FigmaContactForm />
            </div>
            <SectionSpacer size="medium" />
            <div id="our-journey" className="w-full">
                <Journey />
            </div>
            <div id="achievements" className="w-full">
                <Achievements />
            </div>
            
            <Footer />
        </div>
    </div>
);

export default HomeContent;