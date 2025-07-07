import React from 'react';
import Card from './CollaboratorCard';

import ecCouncilLogo from '../assets/ec-council-transparent.png';
import hicaLogo from '../assets/hica-transparent.png';

const collaborators = [
  { name: 'EC-Council', logo: ecCouncilLogo },
  { name: 'HICA', logo: hicaLogo },
];

const Collaborators = () => {
  return (
    <section className="bg-black min-h-screen flex justify-center items-center px-4 py-16 sm:py-20">
      <div className="flex flex-col items-center w-full max-w-7xl">
        <h2 className="text-3xl sm:text-3xl md:text-5xl text-[#ffb347] mb-12 font-heading text-center">
          Our Collaborators
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24 w-full">
          {collaborators.map((collab, index) => (
            <Card key={index} name={collab.name} logo={collab.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;