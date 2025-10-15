import React from "react";
import "../css/dept.css";

const DepartmentHeading = () => {
  return (
    <div className="lamp-container relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0">
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">
        {/* Conic Gradient Left */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="animate-conic-gradient bg-gradient-conic absolute inset-auto right-1/2 h-56 w-60 overflow-visible from-cyan-500 via-transparent to-transparent text-white"
        >
          <div className="absolute bottom-0 left-0 z-20 h-40 w-full bg-black mask-gradient-top" />
          <div className="absolute bottom-0 left-0 z-20 h-full w-40 bg-black mask-gradient-right" />
        </div>

        {/* Conic Gradient Right */}
        <div
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="animate-conic-gradient bg-gradient-conic absolute inset-auto left-1/2 h-56 w-60 from-transparent via-transparent to-cyan-500 text-white"
        >
          <div className="absolute bottom-0 right-0 z-20 h-full w-40 bg-black mask-gradient-left" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-full bg-black mask-gradient-top" />
        </div>

        {/* Background blur elements */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent backdrop-blur-md"></div>
        <div className="animate-conic-gradient absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 blur-3xl"></div>

        {/* Spotlight */}
        <div className="animate-spotlight absolute inset-auto z-30 h-36 w-32 -translate-y-24 rounded-full bg-cyan-400 blur-2xl"></div>

        {/* Glowing Line */}
        <div className="animate-glowing-line absolute inset-auto z-50 h-0.5 w-60 -translate-y-28 bg-cyan-400"></div>

        <div className="absolute inset-auto z-40 h-44 w-full translate-y-[-12.5rem] bg-black"></div>
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        <h1 className="dept-heading">
          <span className="college-name">St. Vincent Pallotti College of Engineering & Technology</span>
          Department of Computer Science and Engineering<br />
          <span className="highlight">(Cyber Security)</span>
        </h1>
      </div>
    </div>
  );
};

export default DepartmentHeading;
