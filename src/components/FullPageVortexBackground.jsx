import React, { useEffect, useRef } from "react";

const FullPageVortexBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create particles with enhanced properties
    const particles = [];
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        hue: Math.random() > 0.5 ? 0 : 240, // Blue or Red
        radius: 0.8 + Math.random() * 1.5,
        life: 0,
        maxLife: 300 + Math.random() * 200,
        glowIntensity: 0.3 + Math.random() * 0.7
      });
    }

    const animate = () => {
      // Clear canvas with black background
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      


      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Vortex effect - create swirling motion toward center
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0) {
          const spiralForce = 0.08;
          const tangentForce = 0.04;
          
          // Radial force (toward center)
          particle.vx += (-dx / distance) * spiralForce;
          particle.vy += (-dy / distance) * spiralForce;
          
          // Tangential force (perpendicular to radius for spiral)
          particle.vx += (-dy / distance) * tangentForce;
          particle.vy += (dx / distance) * tangentForce;
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.05;
        particle.vy += (Math.random() - 0.5) * 0.05;

        // Limit velocity
        const maxVel = 2.5;
        const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        if (vel > maxVel) {
          particle.vx = (particle.vx / vel) * maxVel;
          particle.vy = (particle.vy / vel) * maxVel;
        }

        // Calculate alpha based on life
        const alpha = Math.max(0.2, 1 - (particle.life / particle.maxLife));
        
        // Enhanced glow effect like in the Phoenix image
        ctx.save();
        
        // Outer glow layer (largest, most transparent)
        const outerGlowColor = particle.hue === 0 ? 
          `rgba(0, 150, 255, ${alpha * 0.1})` : 
          `rgba(255, 50, 50, ${alpha * 0.1})`;
        
        ctx.shadowColor = outerGlowColor;
        ctx.shadowBlur = 25;
        ctx.fillStyle = outerGlowColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 4, 0, Math.PI * 2);
        ctx.fill();
        
        // Middle glow layer
        const middleGlowColor = particle.hue === 0 ? 
          `rgba(0, 200, 255, ${alpha * 0.3})` : 
          `rgba(255, 100, 100, ${alpha * 0.3})`;
        
        ctx.shadowColor = middleGlowColor;
        ctx.shadowBlur = 15;
        ctx.fillStyle = middleGlowColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner glow layer
        const innerGlowColor = particle.hue === 0 ? 
          `rgba(0, 150, 255, ${alpha * 0.6})` : 
          `rgba(255, 50, 50, ${alpha * 0.6})`;
        
        ctx.shadowColor = innerGlowColor;
        ctx.shadowBlur = 8;
        ctx.fillStyle = innerGlowColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Core particle (brightest)
        ctx.shadowBlur = 0;
        const coreColor = particle.hue === 0 ? 
          `rgba(100, 200, 255, ${alpha})` : 
          `rgba(255, 150, 150, ${alpha})`;
        
        ctx.fillStyle = coreColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();

        // Reset particle if it's dead or out of bounds
        if (particle.life > particle.maxLife || 
            particle.x < -100 || particle.x > canvas.width + 100 ||
            particle.y < -100 || particle.y > canvas.height + 100) {
          // Respawn at edge
          const edge = Math.floor(Math.random() * 4);
          switch (edge) {
            case 0: // Top
              particle.x = Math.random() * canvas.width;
              particle.y = -20;
              break;
            case 1: // Right
              particle.x = canvas.width + 20;
              particle.y = Math.random() * canvas.height;
              break;
            case 2: // Bottom
              particle.x = Math.random() * canvas.width;
              particle.y = canvas.height + 20;
              break;
            case 3: // Left
              particle.x = -20;
              particle.y = Math.random() * canvas.height;
              break;
          }
          particle.vx = (Math.random() - 0.5) * 1.5;
          particle.vy = (Math.random() - 0.5) * 1.5;
          particle.life = 0;
          particle.maxLife = 300 + Math.random() * 200;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', 
        height: '100vh',
        zIndex: 1,
        backgroundColor: '#000000',
        pointerEvents: 'none'
      }}
    />
  );
};

export default FullPageVortexBackground;