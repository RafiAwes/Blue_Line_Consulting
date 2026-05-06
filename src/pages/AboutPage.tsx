/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { Shield, Users, Gem, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { PageHeader } from '../components/PageHeader';
import { Stats } from '../components/Stats';

const values = [
  {
    title: 'Integrity First',
    desc: 'We do what we say we\'ll do. No jargon, no hidden fees, no surprises.',
    icon: Shield
  },
  {
    title: 'Partnership Mindset',
    desc: 'Your success is our success. We invest in your growth as if it were our own.',
    icon: Users
  },
  {
    title: 'Craft & Quality',
    desc: 'Every deliverable is built to last — polished, strategic, and ready to scale.',
    icon: Gem
  },
  {
    title: 'Speed to Market',
    desc: 'We focus on what actually moves the needle, helping you launch and scale faster.',
    icon: Zap
  }
];

export default function AboutPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <>
      <PageHeader 
        label="About us" 
        title="Helping you build a business that works." 
      />

      {/* Our Story Section */}
      <section className="py-24 bg-white overflow-hidden" ref={scrollRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              {/* Offset Blue Border - Bottom Right */}
              <div className="absolute -bottom-10 -right-10 w-full h-full border-2 border-brand-blue/20 -z-10 rounded-sm" />
              
              <div className="relative z-10 shadow-2xl rounded-sm overflow-hidden h-[600px]">
                <motion.img 
                  style={{ y }}
                  src="/images/about-team.png" 
                  alt="Team meeting"
                  className="w-full h-[120%] object-cover absolute top-0 left-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522071823991-b99c223a7097?auto=format&fit=crop&q=80&w=1200&h=1600";
                  }}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">Our Story</span>
                <h2 className="mt-6 heading-serif text-5xl font-bold text-brand-dark leading-tight">
                  Strategy, positioning, and <br />
                  growth — <span className="text-brand-blue italic">done the right way.</span>
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-500 text-lg leading-relaxed">
                <p>
                  At Blu Line Consulting Group, we believe starting and growing a business shouldn't feel overwhelming or confusing.
                </p>
                <p>
                  We created Blu Line to simplify the process — giving entrepreneurs and business owners a clear path from idea to execution. Whether you're just getting started or looking to scale, our goal is to provide everything you need in one place.
                </p>
                <p>
                  From forming your LLC to building your online presence and generating consistent leads, we focus on what actually moves your business forward.
                </p>
              </div>

              <div className="p-8 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-sm">
                <p className="text-xl font-serif italic text-brand-blue leading-relaxed">
                  "At the core of everything we do is one mission: <span className="font-bold underline decoration-brand-blue/30 underline-offset-4">helping you build a business that works.</span>"
                </p>
              </div>

              <Button variant="outline" className="group h-14 px-10 border-2">
                SEE OUR SERVICES
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Core Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">What we stand for</span>
              <h2 className="heading-serif text-5xl font-bold text-brand-dark">Our core values.</h2>
              <p className="text-slate-500 text-lg max-w-md">
                We're more than just a consulting firm. We're your partners in growth, committed to excellence in every detail.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((v, index) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all rounded-sm group"
                >
                  <div className="w-12 h-12 bg-brand-blue/5 flex items-center justify-center rounded-sm mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                    <v.icon className="w-6 h-6 text-brand-blue group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="heading-serif text-xl font-bold text-brand-dark mb-3">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="heading-serif text-4xl font-bold text-brand-dark mb-8">
            Ready to build something great?
          </h2>
          <Button size="lg" className="h-16 px-12 text-lg">
            GET STARTED TODAY
          </Button>
        </div>
      </section>
    </>
  );
}
