import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Mission = () => {
  const cards = [
    {
      title: 'OUR MISSION',
      text: 'To empower students with cutting-edge cybersecurity knowledge and practical skills, fostering a community of ethical hackers and security professionals who contribute to a safer digital world.',
    },
    {
      title: 'OUR VISION',
      text: 'To be recognized as a leading student-run cybersecurity organization that shapes the next generation of security professionals and contributes to global cybersecurity awareness.',
    },
  ];

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
      const rotateX = ((y - centerY) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * -8;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    const handleMouseLeave = () => {
      const card = cardRef.current;
      card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
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
          className="
            group relative w-full max-w-[80vw] sm:max-w-[70vw] md:w-[340px] lg:w-[380px] xl:w-[420px]
            min-h-[240px] md:min-h-[280px] 
            border border-white/20 backdrop-blur-xl 
            transition-all duration-500 ease-out 
            flex flex-col justify-center cursor-pointer overflow-hidden 
            bg-[rgba(19,19,21,0.8)] hover:bg-transparent
          "
          style={{
            transformStyle: 'preserve-3d',
            borderRadius: '20px',
            boxShadow:
              '0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.04)',
          }}
        >
          {/* Glassy Overlay */}
          <div
            className="absolute inset-0 z-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(135deg, rgba(192,192,192,0.03) 0%, rgba(19,19,21,0.1) 50%, rgba(192,192,192,0.02) 100%)',
              borderRadius: '20px',
            }}
          />
          {/* Noise Layer */}
          <div
            className="pointer-events-none absolute inset-0 z-5 opacity-[0.03]"
            style={{
              backgroundImage:
                "url('https://grainy-gradients.vercel.app/noise.svg')",
              mixBlendMode: 'overlay',
            }}
          />
          {/* Shine Layer */}
          <div
            className="pointer-events-none absolute inset-0 z-10 group-hover:opacity-100 opacity-60 transition-opacity duration-500"
            style={{
              background:
                'linear-gradient(135deg, rgba(192,192,192,0.1), transparent 30%, transparent 70%, rgba(192,192,192,0.05))',
              borderRadius: '20px',
              padding: '1px',
            }}
          />
          {/* Glow Effect */}
          <div
            className="absolute z-15 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              top: 'var(--y, 50%)',
              left: 'var(--x, 50%)',
              width: '250px',
              height: '250px',
              background:
                'radial-gradient(circle at center, rgba(100,170,255,0.15) 0%, rgba(100,170,255,0.05) 40%, transparent 70%)',
              transform: 'translate(-50%, -50%)',
              borderRadius: '50%',
            }}
          />
          {/* Card Content */}
          <div className="relative z-30 px-6 py-4 md:px-8 md:py-6 text-center">
            <motion.h2
              className="text-white font-bold mb-4 leading-tight tracking-wide"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
                textShadow: '0 2px 20px rgba(192,192,192,0.2)',
                letterSpacing: '0.02em',
              }}
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h2>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-4 group-hover:via-white/60 transition-all duration-500" />
            <motion.p
              className="text-gray-300 leading-relaxed font-light opacity-90 group-hover:opacity-100 group-hover:text-gray-200 transition-all duration-500"
              style={{
                fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
                lineHeight: '1.6',
                letterSpacing: '0.01em',
              }}
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {text}
            </motion.p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    );
  };

  return (
    <section className="flex justify-center px-4 pt-4 md:pt-8 lg:pt-12 pb-4 md:pb-8 lg:pb-12">
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-4 sm:gap-8 lg:gap-20 scale-[0.95] sm:scale-100 w-full max-w-7xl">
        {cards.map((card, index) => (
          <MissionCard key={index} title={card.title} text={card.text} />
        ))}
      </div>
    </section>
  );
};

export default Mission;
