/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

const stats = [
  { val: '150+', label: 'BUSINESSES LAUNCHED' },
  { val: '98%', label: 'CLIENT RETENTION' },
  { val: '$2M+', label: 'FUNDING SECURED' },
  { val: '3X', label: 'AVG. GROWTH RATE' },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-[#0A1F4C] text-white overflow-hidden relative">
      {/* Subtle abstract background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-2 md:space-y-4"
            >
              <span className="heading-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                {stat.val}
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
