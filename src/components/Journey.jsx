import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useSpring,
  AnimatePresence
} from "framer-motion";
import { cn } from "../lib/utils";
import { Card, CardContent } from "./ui/card";
import "./journey.css";

// Built-in content for the TracingBeam component
const defaultSlides = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Building Scalable Web Apps",
    description: (
      <>
        <p>
          Discover the best practices for building scalable and maintainable web applications using modern frameworks and tools. Learn how to structure your codebase, manage state, and optimize performance for large-scale projects.
        </p>
        <p>
          Explore real-world examples and case studies from industry leaders who have successfully scaled their products to millions of users.
        </p>
      </>
    ),
    badge: "Web Dev",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=3540",
  },
  {
    title: "UI/UX Design Trends 2024",
    description: (
      <>
        <p>
          Stay ahead of the curve with the latest UI/UX design trends for 2024. From neomorphism to glassmorphism, discover how to create visually stunning and user-friendly interfaces that delight your users.
        </p>
        <p>
          Get inspired by award-winning designs and learn how to implement these trends in your own projects.
        </p>
      </>
    ),
    badge: "Design",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&q=80&w=3540",
  },
  {
    title: "Mastering TypeScript",
    description: (
      <>
        <p>
          Unlock the full potential of TypeScript in your JavaScript projects. Learn advanced type features, generics, and how to integrate TypeScript with popular libraries and frameworks.
        </p>
        <p>
          Boost your productivity and code quality with tips and tricks from TypeScript experts.
        </p>
      </>
    ),
    badge: "TypeScript",
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80&w=3540",
  },
];

export const Journey = ({
  className,
  slides = defaultSlides,
}) => {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Calculate the total height for the tracing beam container
  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  // Progress calculation (based on current slide instead of scroll)
  const progress = currentSlide / (slides.length - 1);

  // Spring animations for smooth beam movement
  const y1 = useSpring(
    useTransform(() => 50 + (svgHeight - 50) * progress * 0.8),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(() => 50 + (svgHeight - 250) * progress),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  // Functions to navigate between slides
  const nextSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    // Optional: Auto-rotation timer
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentSlide, nextSlide]);

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20 z-10">
        <motion.div
          className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            animate={{
              backgroundColor: progress > 0 ? "#10b981" : "white",
              borderColor: progress > 0 ? "#059669" : "white",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="0.325" stopColor="#6344F5"></stop>
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      <div ref={contentRef} className="carousel-container h-[500px] overflow-hidden relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute w-full h-full"
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0, transform: "translateY(-10px)" }}
            transition={{ 
              duration: 0.4, 
              ease: [0.23, 1, 0.32, 1],
              opacity: { duration: 0.5 }
            }}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden"
            }}
          >
            <Card className="card-custom w-full h-full overflow-hidden will-change-transform rounded-none border-0 shadow-none py-0">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="card-bg-wrapper h-full relative overflow-hidden">
                  {/* Blur background layer */}
                  <div className="blur-background"></div>
                  
                  {/* Background image */}
                  <div className="absolute inset-0 overflow-hidden shadow-lg transition-opacity duration-700 bg-image z-[10]">
                    <div 
                      className="w-full h-full bg-cover bg-center transform-gpu" 
                      style={{ 
                        backgroundImage: `url('${slides[currentSlide].image}')`,
                        willChange: "transform",
                        transform: "translateZ(0)"
                      }}>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-[20] h-full flex flex-col items-center justify-center p-6 text-white overflow-y-auto">
                    <div className="text-content flex flex-col items-center">
                      <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                        {slides[currentSlide].badge}
                      </h2>
                      <h3 className="font-extrabold text-center truncate max-w-full text-xl mb-4">
                        {slides[currentSlide].title}
                      </h3>
                      <div className="text-center prose prose-sm dark:prose-invert">
                        {slides[currentSlide].description}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
        
        {/* Navigation Controls */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 z-30 px-4 -translate-y-1/2">
          <button 
            onClick={prevSlide} 
            className="bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="bg-white/30 backdrop-blur-sm rounded-full p-2 hover:bg-white/40 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
