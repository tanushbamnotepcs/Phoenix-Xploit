import React from 'react';
import VortexBackground from './VortexBackground';

const VortexDemo = () => {
  return (
    <div className="mx-auto h-[30rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
      <VortexBackground
        backgroundColor="black"
        className="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
        baseHue={220} // Blue hue
        particleCount={700}
        rangeY={100}
        baseSpeed={0.0}
        rangeSpeed={1.5}
        baseRadius={1}
        rangeRadius={2}
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
          Phoenix Vortex
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          Experience the power of blue and red particles swirling in a mesmerizing vortex.
          This dynamic background creates an immersive visual experience.
        </p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
            Explore Now
          </button>
          <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </VortexBackground>
    </div>
  );
};

export default VortexDemo;
