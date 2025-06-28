import React from 'react';
import OurMission from './OurMission';
import DepartmentHeading from './dept';
import SectionSpacer from './SectionSpacer';
import Carousel3D from './Carousel3D';
import { FigmaContactForm } from './contact/FigmaContactForm';
import PhoenixParticlesBackground from './background/PhoenixParticlesBackground';
import AboutUs from './AboutUs';
import Footer from './Footer';
import '../css/globals.css';
import '../css/carousel.css';

const HomeContent = () => (
    <div className="relative w-100% min-h-screen overflow-hidden">
        <PhoenixParticlesBackground />
        <div className="relative z-10">
            <AboutUs />
            <SectionSpacer size="xs" />
            <OurMission />
            <SectionSpacer size="xs" />
            <DepartmentHeading />
            <SectionSpacer size="xs" />
            <Carousel3D />
            <SectionSpacer size="large" />
            <div id="contact">
                <FigmaContactForm />
            </div>
            <SectionSpacer size="medium" />
            <Footer />
        </div>
    </div>
);

export default HomeContent;