"use client";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const wrapperRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    // Keep synced on window resize
    window.addEventListener("resize", updateHeight);

    // Keep synced when content inside changes size
    let resizeObserver;
    if (wrapperRef.current && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(wrapperRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
      if (resizeObserver && wrapperRef.current) {
        resizeObserver.unobserve(wrapperRef.current);
      }
    };
  }, [data]);

  return (
    <div className="w-full bg-transparent font-sans md:px-10">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Our Activities
        </h2>
      </div>

      <div ref={wrapperRef} className="relative max-w-7xl mx-auto pb-20 overflow-visible">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const [isVisible, setIsVisible] = useState(false);

          useEffect(() => {
            const observer = new IntersectionObserver(
              ([entry]) => {
                setIsVisible(entry.isIntersecting);
              },
              { threshold: 0.4 }
            );

            if (itemRef.current) {
              observer.observe(itemRef.current);
            }

            return () => {
              if (itemRef.current) {
                observer.unobserve(itemRef.current);
              }
            };
          }, []);

          return (
            <div
              key={index}
              ref={itemRef}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              {/* Timeline dot and left column */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>

                {/* Desktop Title */}
                <h3
                  className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 transition-all duration-700 ease-in-out ${
                    isVisible ? "opacity-100 drop-shadow-lg" : "opacity-30"
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              {/* Right content */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                {/* Mobile Title */}
                <h3
                  className={`md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500 transition-all duration-700 ease-in-out ${
                    isVisible ? "opacity-100 drop-shadow-md" : "opacity-30"
                  }`}
                >
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Vertical Timeline Line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        />
      </div>
    </div>
  );
};
