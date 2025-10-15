"use client";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";

type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

interface TimelineProps {
  data: TimelineEntry[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Simple fade-in animation variants
  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }), []);

  const cardVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }), []);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="relative">
          {/* Static Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-300 to-transparent dark:via-neutral-600" />
          
          {/* Timeline items */}
          {data.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index}
              variants={itemVariants}
              cardVariants={cardVariants}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Optimized TimelineItem component with intersection-based animations
const TimelineItem = React.memo(({ item, index, variants, cardVariants }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative mb-40 flex items-center justify-between"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Left side content */}
      <div className="w-1/2 pr-24 text-right">
        <motion.div 
          className="rounded-xl border border-neutral-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-xl dark:border-neutral-700/50 dark:bg-neutral-900/80"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            {item.title}
          </h3>
          <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
            {item.content}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <motion.div 
        className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-purple-500/50 ring-2 ring-white/20 dark:ring-neutral-800/20" />
      </motion.div>

      {/* Right side content */}
      <div className="w-1/2 pl-24">
        <motion.div 
          className="rounded-xl border border-neutral-200/50 bg-white/80 backdrop-blur-sm p-6 shadow-xl dark:border-neutral-700/50 dark:bg-neutral-900/80"
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
            {item.title}
          </h3>
          <div className="text-neutral-700 dark:text-neutral-300 space-y-4">
            {item.content}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
});
