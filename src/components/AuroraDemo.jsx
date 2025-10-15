import React from 'react';
import { motion } from 'framer-motion';
import AuroraBackground from './AuroraBackground';

const AuroraDemo = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
        whileInView={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <div className="text-center text-3xl font-bold md:text-7xl dark:text-white">
          Background lights are cool you know.
        </div>
        <div className="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
          And this, is chemical burn.
        </div>
        <button className="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black">
          Burn it now
        </button>
      </motion.div>
    </AuroraBackground>
  );
};

export default AuroraDemo;
