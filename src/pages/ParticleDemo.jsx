import React from 'react';
import InspiraImageParticleComponent from '../components/background/InspiraImageParticleComponent';
import Navbar from '../components/Navbar_Phx';

const ParticleDemo = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              InspiraImageParticle Demo
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Interactive particle effects that transform images into dynamic, mouse-responsive visual experiences. 
              Each particle represents a pixel from the original image.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Phoenix Logo */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-white mb-6">Phoenix Logo</h2>
              <InspiraImageParticleComponent 
                imageUrl="/phx_logo.png"
                width={500}
                height={400}
                particleGap={4}
                particleSize={2}
                layerCount={2}
                gravity={0.05}
                mouseForce={50}
                className="border border-gray-700 rounded-lg shadow-lg"
              />
              <p className="text-gray-400 text-sm mt-4 text-center">
                Original Phoenix logo with particle effects
              </p>
            </div>

            {/* Trail Image */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold text-white mb-6">Trail Effect</h2>
              <InspiraImageParticleComponent 
                imageUrl="/trail.jpg"
                width={500}
                height={400}
                particleGap={3}
                particleSize={1.5}
                layerCount={3}
                gravity={0.08}
                mouseForce={40}
                color="#ff6b35"
                className="border border-gray-700 rounded-lg shadow-lg"
              />
              <p className="text-gray-400 text-sm mt-4 text-center">
                Trail image with orange-tinted particles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-white mb-4">Abstract Pattern</h2>
              <InspiraImageParticleComponent 
                imageUrl="/images/1.png"
                width={400}
                height={300}
                particleGap={2}
                particleSize={1}
                layerCount={4}
                gravity={0.1}
                mouseForce={60}
                color="#00ff88"
                className="border border-gray-700 rounded-lg"
              />
            </div>

            {/* Image 2 */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-white mb-4">Landscape</h2>
              <InspiraImageParticleComponent 
                imageUrl="/images/2.jpg"
                width={400}
                height={300}
                particleGap={3}
                particleSize={1.2}
                layerCount={2}
                gravity={0.06}
                mouseForce={35}
                color="#4285f4"
                className="border border-gray-700 rounded-lg"
              />
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
              <div>
                <div className="text-blue-400 text-4xl mb-2">🖼️</div>
                <h4 className="font-semibold mb-2">Image Processing</h4>
                <p className="text-sm">Each pixel of the image becomes a particle with its original color</p>
              </div>
              <div>
                <div className="text-green-400 text-4xl mb-2">⚡</div>
                <h4 className="font-semibold mb-2">Physics Simulation</h4>
                <p className="text-sm">Particles respond to mouse movement with realistic physics</p>
              </div>
              <div>
                <div className="text-purple-400 text-4xl mb-2">🎨</div>
                <h4 className="font-semibold mb-2">Interactive Effects</h4>
                <p className="text-sm">Customizable colors, sizes, and behaviors for unique experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParticleDemo;
