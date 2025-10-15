import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => (
  <section id="about-us" className="w-full flex justify-center px-2 mt-[70px]">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Accent bar */}
      <div className="w-2 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-l-2xl" />
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-cyan-400 font-heading">
          About Us
        </h2>
        <blockquote className="italic text-white/80 mb-4 border-l-4 border-cyan-400 pl-4">
          "Elevating the Cyber Space"
        </blockquote>
        <p className="text-base md:text-lg text-white/90 leading-relaxed font-body">
          Phoenix CyberSecurity is a{" "}
          <span className="text-yellow-300 font-semibold">
            student-led cybersecurity club
          </span>{" "}
          at SVPCET, dedicated to fostering a culture of cybersecurity awareness and
          excellence. We organize{" "}
          <span className="text-cyan-300">workshops</span>,{" "}
          <span className="text-cyan-300">CTF events</span>, and{" "}
          <span className="text-cyan-300">training sessions</span> to help students
          develop practical skills in cybersecurity.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block px-6 py-2 rounded bg-cyan-500 text-white font-semibold shadow hover:bg-cyan-400 transition"
        >
          Join Us
        </a>
      </div>
    </motion.div>
  </section>
);

export default AboutUs;