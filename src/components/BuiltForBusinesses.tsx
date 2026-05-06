/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Button } from './Button';

export const BuiltForBusinesses = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase block">Who We Are</span>
              <h2 className="mt-6 heading-serif text-4xl md:text-5xl font-bold text-brand-dark leading-tight">
                Built for Businesses That Want More Than Just “Getting Started.”
              </h2>
            </div>
            
            <div className="space-y-6 text-slate-500 text-base leading-relaxed">
              <p>
                Blu Line Consulting Group helps businesses build a strong foundation and create real growth opportunities. From business setup and funding support to lead generation and federal consulting, we provide the tools, strategy, and guidance needed to move forward with confidence.
              </p>
              <p>
                We work with entrepreneurs, startups, and growing companies that are serious about building something long-term — not just checking boxes.
              </p>
              <p>
                Our team focuses on practical solutions that help businesses operate smarter, position themselves professionally, and create opportunities for sustainable growth.
              </p>
            </div>
            
            <Button variant="outline" className="group">
              LEARN MORE
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>

          <div className="relative">
            {/* The blue outline box behind the image in the mockup */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-brand-blue/30 -z-10" />
            
            <div className="relative z-10 shadow-2xl overflow-hidden rounded-sm">
              <img 
                src="/images/who-we-are.png" 
                alt="Consulting team"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1600880212340-02d956ea3b85?auto=format&fit=crop&q=80&w=1200&h=1200";
                }}
              />
              {/* <div className="absolute top-8 left-8 p-6 bg-slate-900/90 backdrop-blur-sm text-white max-w-xs border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-brand-accent flex items-center justify-center text-white font-serif font-bold text-sm">BL</div>
                  <span className="text-[10px] font-bold tracking-widest uppercase">Strategy. Positioning. Growth.</span>
                </div>
                <h4 className="font-serif italic text-lg leading-snug">
                  "Build the firm foundation, then scale with confidence."
                </h4>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
