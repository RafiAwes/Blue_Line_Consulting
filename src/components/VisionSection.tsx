/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const VisionSection = () => {
  return (
    <section className="relative py-32 bg-brand-dark overflow-hidden">
      {/* Decorative lines/wave in background snippet */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 400C300 350 500 450 800 350C1100 250 1300 350 1440 300V400H0Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="720" y1="200" x2="720" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        <div className="max-w-xl">
          <div className="flex gap-2 items-center mb-6">
            <div className="w-12 h-[2px] bg-white opacity-20" />
            <div className="w-3 h-3 rotate-45 border border-brand-accent" />
          </div>
          <h2 className="heading-serif text-5xl md:text-6xl font-bold text-white leading-tight">
            You Have the Vision. <br />
            <span className="text-brand-accent italic">We Have the Blueprint.</span>
          </h2>
        </div>
        
        <div className="mt-12 md:mt-0 max-w-sm">
          <p className="text-slate-400 text-lg leading-relaxed">
            Let us handle the strategy, setup, and growth so you can focus on what you do best.
          </p>
        </div>
      </div>
    </section>
  );
};
