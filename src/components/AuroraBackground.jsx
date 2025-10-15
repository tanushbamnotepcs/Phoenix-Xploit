import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const AuroraBackground = ({ 
  children, 
  radialGradient = true, 
  className = '' 
}) => {
  const styles = {
    "--aurora": "repeating-linear-gradient(100deg,#dc2626_10%,#ef4444_20%,#3b82f6_30%,#1d4ed8_40%,#dc2626_50%,#ef4444_60%,#3b82f6_70%,#1d4ed8_80%,#dc2626_90%)",
    "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
    "--white-gradient": "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
    "--blue-300": "#93c5fd",
    "--blue-400": "#60a5fa",
    "--blue-500": "#3b82f6",
    "--blue-600": "#2563eb",
    "--blue-700": "#1d4ed8",
    "--red-300": "#fca5a5",
    "--red-400": "#f87171",
    "--red-500": "#ef4444",
    "--red-600": "#dc2626",
    "--red-700": "#b91c1c",
    "--black": "#000",
    "--white": "#fff",
    "--transparent": "transparent",
    "--animate-aurora": "aurora 60s linear infinite",
  };

  return (
    <main>
      <div
        style={styles}
        className={cn(
          'transition-bg relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900',
          className
        )}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--red-600)_10%,var(--red-500)_20%,var(--blue-500)_30%,var(--blue-700)_40%,var(--red-600)_50%,var(--red-500)_60%,var(--blue-500)_70%,var(--blue-700)_80%,var(--red-600)_90%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              radialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
