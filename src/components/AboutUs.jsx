import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => (
  <section id="about-us" className="w-full flex justify-center px-2 mt-[70px]">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex max-w-[1200px] w-full h-[300px] bg-white/3 backdrop-blur-xs rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Accent bar */}
      <div className="w-2 bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 rounded-l-2xl" />
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-heading">
          About Us
        </h2>
        <blockquote className="italic text-white/80 mb-4 border-l-4 border-cyan-400 pl-4">
          "Elevating the Cyber Space"
        </blockquote>
        <p className="text-base md:text-lg text-white/90 leading-relaxed font-body">
          Phoenix CyberSecurity is a{" "}
          <span className="bg-gradient-to-r dark:from-yellow-400 dark:to-orange-300 bg-clip-text text-transparent font-semibold">
            student-led cybersecurity club
          </span>{" "}
          at SVPCET, dedicated to fostering a culture of cybersecurity awareness and
          excellence. We organize{" "}
          <span className="bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">workshops</span>,{" "}
          <span className="bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">CTF events</span>, and{" "}
          <span className="bg-gradient-to-r dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">training sessions</span> to help students
          develop practical skills in cybersecurity.
        </p>
        <a href="#contact"
          className="mt-9 px-6 py-2 rounded bg-gradient-to-r from-blue-400 to-purple-400 text-transparent">
          Join Us
        </a>
      </div>
    </motion.div>
  </section>
);

export default AboutUs;