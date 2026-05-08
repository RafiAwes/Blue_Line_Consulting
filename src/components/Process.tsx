/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We start with a free strategy call to understand your business, your goals, and what’s standing in your way.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We build your custom blueprint — LLC, logo, website, marketing plan, and a funding path tailored to you.'
  },
  {
    num: '03',
    title: 'Deploy',
    desc: 'We execute every piece end-to-end — legal filings, brand, site, ad campaigns, and grant/loan applications.'
  },
  {
    num: '04',
    title: 'Drive',
    desc: 'We optimize your ads, nurture your leads, and keep pushing growth so your business scales month over month.'
  }
];

export const Process = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">Our Process</span>
          <h2 className="heading-serif text-5xl font-bold text-brand-dark max-w-2xl mx-auto leading-tight">
            A proven path from idea to growth.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative p-10 bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-brand-blue/10 transition-all group"
            >
              <div className="heading-serif text-6xl font-bold text-slate-100 group-hover:text-brand-blue/10 transition-colors mb-6">
                {step.num}
              </div>
              <h3 className="heading-serif text-2xl font-bold text-brand-dark mb-4">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.desc}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-blue transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
