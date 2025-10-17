import React from "react";
import FullPageVortexBackground from "../components/FullPageVortexBackground";

const FullPageVortexDemo = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden text-white">
      <FullPageVortexBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">The Hell Is This?</h1>
        <p className="text-xl max-w-md">
          This is chemical burn. It'll hurt more than you've ever been burned and you'll have a scar.
        </p>
        <div className="mt-8 text-sm text-gray-400">
          <p>You should see blue and red circles moving in circles</p>
          <p>If you don't see anything, check browser console for errors</p>
        </div>
      </div>
    </div>
  );
};

export default FullPageVortexDemo;