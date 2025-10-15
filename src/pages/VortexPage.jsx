import React from 'react';
import VortexDemo from '../components/VortexDemo';

const VortexPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Vortex Background Demo</h1>
          <p className="text-gray-300">Experience the mesmerizing blue and red particle vortex</p>
        </div>
        
        <VortexDemo />
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            This component uses simplex noise to create organic particle movement patterns
          </p>
        </div>
      </div>
    </div>
  );
};

export default VortexPage;
