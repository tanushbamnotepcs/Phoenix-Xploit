import React from 'react';
import ecCouncilLogo from '../assets/ec-council-transparent.png';
import hicaLogo from '../assets/hica-transparent.png';

const Collaborators = () => {
  const collaborators = [
    { name: 'EC-Council', logo: ecCouncilLogo },
    { name: 'HICA', logo: hicaLogo },
  ];

  return (
    <>
      {/* Inline Tailwind keyframes (no CSS file needed) */}
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-150%) skewX(-20deg) scaleY(1.2);
              opacity: 0;
            }
            30% { opacity: 0.2; }
            50% { opacity: 0.4; }
            70% { opacity: 0.2; }
            100% {
              transform: translateX(150%) skewX(-20deg) scaleY(1.2);
              opacity: 0;
            }
          }
        `}
      </style>

      <section className="bg-transparent min-h-screen flex justify-center items-center px-4">
        <div className="flex flex-col items-center w-full max-w-7xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400 pb-15">
            Collaborations
          </h2>

          <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24 w-full">
            {collaborators.map((collab, index) => (
              <div
                key={index}
                className="
                  relative overflow-hidden group 
                  w-full 
                  max-w-[55vw] sm:max-w-[55vw] md:w-[320px] lg:w-[400px] xl:w-[460px] 
                  aspect-[16/9] 
                  p-3 sm:p-4 
                  bg-black/20
                  border border-[rgba(35,105,255,0.4)]
                  backdrop-blur-[20px] 
                  rounded-2xl 

                  transition-all ease-in-out duration-300 
                  flex justify-center items-center text-center 
                  hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.25)]
                  hover:border-[rgba(100,160,255,0.4)]
                  hover:scale-110
                  text-white font-body text-base
                "
              >
                {/* Shine Effect Layer */}
                <div className="absolute inset-0 pointer-events-none z-0">
                  <div
                    className="
                      h-full w-full 
                      bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0)_100%)] 
                      blur-[10px] 
                      mix-blend-screen 
                      opacity-100 
                      animate-[shine_4s_infinite_cubic-bezier(0.4,0,0.2,1)]
                      translate-x-[-150%]
                    "
                  />
                </div>

                {/* Logo */}
                <img
                  src={collab.logo}
                  alt={`${collab.name} logo`}
                  className="z-10 max-w-[180px] max-h-[180px] sm:max-w-[300px] sm:max-h-[300px] object-contain opacity-50 group-hover:opacity-200 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborators;
