"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { cn } from "../lib/utils";

const slidesData = [
  {
    title: "EncipherX 1.0 – March 2022",
    description: (
      <div className="text-neutral-100 text-sm md:text-base max-w-2xl space-y-2 text-justify leading-relaxed">
        <p>
          Held on 24–25 March 2022, EncipherX 1.0 marked the first flagship cybersecurity event organized by the Phoenix Cyber Security Forum. It combined interactive workshops with hands-on competitions.
        </p>
        <p className="font-semibold">Topics Covered:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Ethical Hacking</li>
          <li>Linux Administration</li>
          <li>Web Development</li>
        </ul>
        <p>Hands-on labs emphasized legal boundaries and real-world security challenges.</p>
      </div>
    ),
    image: "/trail.jpg",
  },
  {
    title: "EncipherX 2.0 – March 2024",
    description: (
      <div className="text-neutral-100 text-sm md:text-base max-w-2xl space-y-2 text-justify leading-relaxed">
        <p>
          EncipherX 2.0 introduced infrastructure-based modules and DevSecOps practices with Ansible, Jenkins, and Digital Forensics.
        </p>
        <p>Each workshop emphasized automation, secure configuration, and hands-on experience.</p>
      </div>
    ),
    image: "/trail.jpg",
  },
  {
    title: "EncipherX 3.0 – March 2025",
    description: (
      <div className="text-neutral-100 text-sm md:text-base max-w-2xl space-y-2 text-justify leading-relaxed">
        <p>This four-day event featured immersive workshops and a 24-hour CTF competition with over 90+ challenges.</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Cryptography</li>
          <li>Forensics</li>
          <li>Reverse Engineering</li>
          <li>Web Exploitation</li>
          <li>Binary Analysis</li>
        </ul>
        <p>The event concluded with mentorship sessions and a ₹40,000 prize pool.</p>
      </div>
    ),
    image: "/trail.jpg",
  },
  {
    title: "Mobile Security Awareness Seminar",
    description: (
      <div className="text-neutral-100 text-sm md:text-base max-w-2xl space-y-2 text-justify leading-relaxed">
        <ul className="list-disc list-inside ml-4">
          <li>Threats: Phishing, Fake Apps, Insecure WiFi</li>
          <li>Device Hardening: 2FA, App Permissions</li>
          <li>Student Q&A on Digital Hygiene</li>
        </ul>
        <p>This seminar reached college and school students, boosting cybersecurity awareness in the community.</p>
      </div>
    ),
    image: "/trail.jpg",
  },
];

export const Activities = ({ className, slides = slidesData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const contentRef = useRef(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight);
  }, []);

  // Animated beam progress
  const progress = currentSlide / (slides.length - 1);
  const y1 = useSpring(useTransform(() => 50 + (svgHeight - 50) * progress * 0.8), {
    stiffness: 500,
    damping: 90,
  });
  const y2 = useSpring(useTransform(() => 50 + (svgHeight - 250) * progress), {
    stiffness: 500,
    damping: 90,
  });

  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);

  // Auto-slide, stop when hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setTimeout(nextSlide, 6000);
    return () => clearTimeout(timer);
  }, [currentSlide, isHovered]);

  return (
    <section className="bg-transparent min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-20">
      <div className="text-3xl md:text-5xl font-bold text-center mb-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
         <h2 className="text-4xl sm:text-5xl md:text-6xl mb-20 font-heading text-center">
        Activities
      </h2>
      </div>
     

      <motion.div
        ref={ref}
        className={cn("relative mx-auto w-full max-w-5xl px-4 md:px-8", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* ===== Timeline Beam on Left ===== */}
        <div className="absolute top-3 -left-6 md:-left-20 z-10 hidden md:block">
          <motion.div className="border-neutral-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm">
            <motion.div
              animate={{
                backgroundColor: progress > 0 ? "#10b981" : "white",
                borderColor: progress > 0 ? "#059669" : "white",
              }}
              className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
            />
          </motion.div>

          <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block">
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="#9091A0"
              strokeOpacity="0.16"
            />
            <motion.path
              d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
              fill="none"
              stroke="url(#beamGradient)"
              strokeWidth="1.25"
            />
            <defs>
              <motion.linearGradient id="beamGradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                <stop stopColor="#18CCFC"></stop>
                <stop offset="0.325" stopColor="#6344F5"></stop>
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
              </motion.linearGradient>
            </defs>
          </svg>
        </div>

        {/* ===== Carousel Card ===== */}
        <div ref={contentRef} className="relative h-[520px] md:h-[550px] overflow-hidden rounded-2xl shadow-2xl group">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute w-full h-full"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Card className="w-full h-full border-0 shadow-none rounded-2xl overflow-hidden relative">
                <CardContent className="p-0 h-full relative">
                  {/* Background Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url('${slides[currentSlide].image}')`,
                    }}
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Title always visible */}
                  <div className="absolute top-8 left-0 w-full text-center z-20 px-4">
                    <motion.h2
                      key={slides[currentSlide].title}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white font-extrabold text-2xl md:text-4xl drop-shadow-lg"
                    >
                      {slides[currentSlide].title}
                    </motion.h2>
                  </div>

                  {/* Description (visible on hover) */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-h-[380px] overflow-y-auto w-11/12 md:w-3/4 border border-white/10">
                      {slides[currentSlide].description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 z-30 px-4 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-black/40 hover:bg-black/50 backdrop-blur-md rounded-full p-2 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/40 hover:bg-black/50 backdrop-blur-md rounded-full p-2 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="white" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${currentSlide === i ? "bg-white w-6" : "bg-white/50 w-2"}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
