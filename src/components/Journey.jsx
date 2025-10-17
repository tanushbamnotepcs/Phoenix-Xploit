"use client";
import React from "react";
import { Timeline } from "./ui/timeline";

export const Journey = ({ data }) => {
  return (
    <div className="w-full bg-transparent font-sans md:px-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
          Our Journey
        </h2>
      </div>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
};
