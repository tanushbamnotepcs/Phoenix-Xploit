import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MissionCard = ({ title, text }) => {
  const cardRef = useRef(null);
  const inViewRef = useRef(null);

  const isInView = useInView(inViewRef, { once: true, margin: '-100px' });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, y: 180 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="perspective-[1000px] py-4"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card relative w-full max-w-[90vw] sm:max-w-[80vw] md:w-[420px] lg:w-[480px] xl:w-[540px] p-4 bg-[rgba(19,19,21,0.43)] border-2 border-white/10 backdrop-blur-xl rounded-2xl transition-transform duration-300 ease-out flex flex-col justify-center h-full overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Grainy overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
            opacity: 0.05,
          }}
        />
        {/* Shine border overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-[20px]"
          style={{
            padding: '2px',
            background: 'linear-gradient(135deg, rgba(19, 19, 19, 0.25), transparent)',
          }}
        />
        {/* Glow effect */}
        <div
          className="glow absolute z-0 pointer-events-none"
          style={{
            top: 'var(--y, 50%)',
            left: 'var(--x, 50%)',
            width: 200,
            height: 200,
            background: 'radial-gradient(circle at center, rgba(0,255,200,0.2), transparent 80%)',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }}
        />
        {/* Show glow on hover */}
        <style>{`
          .card:hover .glow, .card:focus .glow {
            opacity: 1 !important;
          }
        `}</style>
        <div className="z-30 text-white text-center opacity-40 hover:opacity-100 focus:opacity-100 transition-opacity duration-500">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading">{title}</h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-2xl font-body">{text}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MissionCard;