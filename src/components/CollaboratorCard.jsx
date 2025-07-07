import React from 'react';
import '../CSS/Collaborator.css';

const Card = ({ name, logo }) => {
  return (
    <div className="
      relative overflow-hidden group 
      w-full 
      max-w-[55vw] sm:max-w-[55vw] md:w-[320px] lg:w-[400px] xl:w-[460px] 
      aspect-[16/9] 
      p-3 sm:p-4 
      bg-[rgba(19,19,21,0.43)] 
      border border-[rgba(0,0,0,0.51)] 
      backdrop-blur-[20px] 
      rounded-2xl 
      transition-all ease-in-out duration-300 
      flex justify-center items-center text-center 
      hover:shadow-[0_0_20px_1px_rgba(255,255,255,0.31)] 
      hover:border-[rgba(255,255,255,0.33)] 
      hover:scale-110 
      text-white font-body text-base
    ">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="shine-effect h-full w-full" />
      </div>

      <img
        src={logo}
        alt={`${name} logo`}
        className="z-10 max-w-[180px] max-h-[180px] sm:max-w-[300px] sm:max-h-[300px] object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  );
};

export default Card;