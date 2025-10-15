import React, { useEffect, useRef, useState } from 'react';
import { inspiraImageParticles } from './InspiraImageParticle.js';

const InspiraImageParticleComponent = ({ 
  imageUrl, 
  width = 800, 
  height = 600, 
  particleGap = 3,
  particleSize = 1,
  layerCount = 1,
  gravity = 0.08,
  mouseForce = 30,
  color,
  className = "",
  style = {},
  ...props 
}) => {
  const containerRef = useRef(null);
  const particleInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !imageUrl) return;

    // Initialize the particle system
    const { InspiraImageParticle } = inspiraImageParticles();
    
    const options = {
      imageUrl,
      width,
      height,
      particleGap,
      particleSize,
      layerCount,
      gravity,
      mouseForce,
      color,
      wrapperElement: containerRef.current,
      ...props
    };

    particleInstanceRef.current = new InspiraImageParticle(options);

    // Handle image loaded event
    particleInstanceRef.current.on('imageLoaded', () => {
      setIsLoaded(true);
    });

    // Cleanup function
    return () => {
      if (particleInstanceRef.current) {
        particleInstanceRef.current.stop();
        particleInstanceRef.current = null;
      }
    };
  }, [imageUrl, width, height, particleGap, particleSize, layerCount, gravity, mouseForce, color]);

  // Handle component unmount
  useEffect(() => {
    return () => {
      if (particleInstanceRef.current) {
        particleInstanceRef.current.stop();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`inspira-particle-container ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      {!isLoaded && (
        <div 
          className="flex items-center justify-center w-full h-full bg-gray-900"
          style={{ minHeight: `${height}px` }}
        >
          <div className="text-white text-lg">Loading particle effect...</div>
        </div>
      )}
    </div>
  );
};

export default InspiraImageParticleComponent;
